import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/ActionList/Item',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=9677%3A44019'
    }
  },
  argTypes: {
    size: {
      defaultValue: '',
      options: ['actionList-item--sizeMedium', 'actionList-item--sizeLarge'],
      control: {type: 'select'},
      description: 'small (default), medium, large'
    },
    // hasLeadingVisual: {
    //   defaultValue: false,
    //   control: {type: 'boolean'}
    // },
    leadingVisual: {
      defaultValue: '',
      name: 'leadingVisual',
      type: 'string',
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field'
    },
    trailingVisual: {
      defaultValue: '',
      name: 'trailingVisual',
      type: 'string',
      description: 'Paste [Octicon](https://primer.style/octicons/) in control field'
    },
    itemLabel: {
      defaultValue: 'Item label',
      type: 'string',
      name: 'itemLabel',
      description: 'string'
    },
    blockDescription: {
      defaultValue: 'Item block description',
      type: 'string',
      name: 'blockDescription',
      description: 'string'
    },
    description: {
      defaultValue: 'Item description',
      type: 'string',
      name: 'description',
      description: 'string'
    },
    descriptionPosition: {
      defaultValue: 'actionList-item-label--blockDescription',
      options: ['actionList-item-label--blockDescription', 'actionList-item-label--inlineDescription'],
      control: {type: 'select'},
      description: 'block (default), inline'
    }
  }
  //   decorators: [
  //     Story => (
  //       <div style={{margin: '3em', border: 'dashed 1px var(--color-scale-gray-3)'}}>
  //         <ul className="actionList">
  //           <Story />
  //         </ul>
  //       </div>
  //     )
  //   ]
}

const Template = ({
  itemLabel,
  size,
  leadingVisual,
  trailingVisual,
  blockDescription,
  description,
  descriptionPosition
}) => (
  <li className="actionList-item">
    <span
      className={clsx(
        'actionList-item-content',
        `${size}`,
        leadingVisual && 'actionList-item-content--leadingVisual',
        trailingVisual && 'actionList-item-content--trailingVisual',
        blockDescription && 'actionList-item-content--blockDescription'
      )}
    >
      {leadingVisual && <span className="actionList-item-visual" dangerouslySetInnerHTML={{__html: leadingVisual}} />}
      {description ? (
        <span className={`${descriptionPosition}`}>
          <span className="actionList-item-label">{itemLabel}</span>
          <span className="actionList-item-description">{description}</span>
        </span>
      ) : (
        <span className="actionList-item-label">{itemLabel}</span>
      )}
      {/* <span className="actionList-item-label">{itemLabel}</span> */}
      {trailingVisual && <span className="actionList-item-visual" dangerouslySetInnerHTML={{__html: trailingVisual}} />}
    </span>
  </li>
)

export const Playground = Template.bind({})
Playground.args = {}
Playground.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const TextOnly = args => (
  <li className="actionList-item">
    <span className="actionList-item-content">
      <span className="actionList-item-label">{args.labelText}</span>
    </span>
  </li>
)
TextOnly.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]
TextOnly.args = {
  labelText: 'Default text'
}
// export const Primary = Playground.bind({})
// Primary.args = {
//   primary: true,
//   label: 'Button'
// }

export const SizeMedium = args => (
  <>
    <ul className="actionList">
      <li className="actionList-item">
        <span className="actionList-item-content actionList-item--sizeMedium">
          <span className="actionList-item-label">Medium item</span>
        </span>
      </li>
    </ul>
  </>
)
SizeMedium.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const SizeLarge = args => (
  <>
    <ul className="actionList">
      <li className="actionList-item">
        <span className="actionList-item-content actionList-item--sizeLarge">
          <span className="actionList-item-label">Large item</span>
        </span>
      </li>
    </ul>
  </>
)
SizeLarge.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const SectionDivider = args => (
  <>
    <li className="actionList-sectionDivider"></li>
  </>
)
SectionDivider.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const SectionDividerFilled = args => (
  <>
    <li className="actionList-sectionHeader actionList-sectionHeader--filled">Section title</li>
  </>
)
SectionDividerFilled.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const SectionDividerSimple = args => (
  <>
    <li className="actionList-sectionHeader">Section title (subtle)</li>
  </>
)
SectionDividerSimple.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const LeadingVisual = args => (
  <>
    <li className="actionList-item">
      <div className="actionList-item-content actionList-item-content--leadingVisual">
        <span className="actionList-item-visual">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            ></path>
          </svg>
        </span>
        <span className="actionList-item-label">Item with leading visual</span>
      </div>
    </li>
  </>
)
LeadingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const TrailingVisual = args => (
  <>
    <li className="actionList-item">
      <div className="actionList-item-content actionList-item-content--trailingVisual">
        <span className="actionList-item-label">Item with trailing visual</span>
        <span className="actionList-item-visual">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            ></path>
          </svg>
        </span>
      </div>
    </li>
  </>
)
TrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const TrailingText = args => (
  <>
    <li className="actionList-item">
      <div className="actionList-item-content actionList-item-content--trailingVisual">
        <span className="actionList-item-label">Item with trailing visual</span>
        <span className="actionList-item-visual">⌘N</span>
      </div>
    </li>
  </>
)
TrailingText.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const LeadingAndTrailingVisual = args => (
  <>
    <li className="actionList-item">
      <div className="actionList-item-content actionList-item-content--leadingVisual actionList-item-content--trailingVisual">
        <span className="actionList-item-visual">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"
            ></path>
          </svg>
        </span>
        <span className="actionList-item-label">Item with leading + trailing visual</span>
        <span className="actionList-item-visual">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            ></path>
          </svg>
        </span>
      </div>
    </li>
  </>
)
LeadingAndTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const BlockDescription = args => (
  <li className="actionList-item">
    <div className="actionList-item-content actionList-item-content--blockDescription">
      <span className="actionList-item-label--blockDescription">
        <span className="actionList-item-label">Item with leading visual</span>
        <span className="actionList-item-description">Item with leading visual</span>
      </span>
    </div>
  </li>
)
BlockDescription.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const BlockDescriptionWithLeadingVisual = args => (
  <li className="actionList-item">
    <div className="actionList-item-content actionList-item-content--leadingVisual actionList-item-content--blockDescription">
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
      <span className="actionList-item-label--blockDescription">
        <span className="actionList-item-label">Item with leading visual</span>
        <span className="actionList-item-description">Item with leading visual</span>
      </span>
    </div>
  </li>
)
BlockDescriptionWithLeadingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const BlockDescriptionWithTrailingVisual = args => (
  <li className="actionList-item">
    <div className="actionList-item-content actionList-item-content--trailingVisual actionList-item-content--blockDescription">
      <span className="actionList-item-label--blockDescription">
        <span className="actionList-item-label">Item with leading visual</span>
        <span className="actionList-item-description">Item with leading visual</span>
      </span>
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
    </div>
  </li>
)
BlockDescriptionWithTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const BlockDescriptionWithLeadingAndTrailingVisual = args => (
  <li className="actionList-item">
    <div className="actionList-item-content actionList-item-content--leadingVisual actionList-item-content--trailingVisual actionList-item-content--blockDescription">
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
      <span className="actionList-item-label--blockDescription">
        <span className="actionList-item-label">Item with leading visual</span>
        <span className="actionList-item-description">Item with leading visual</span>
      </span>
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
    </div>
  </li>
)
BlockDescriptionWithLeadingAndTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const InlineDescription = args => (
  <li className="actionList-item">
    <span className="actionList-item-content">
      <span className="actionList-item-label--inlineDescription">
        <span className="actionList-item-label">Default text only item</span>
        <span className="actionList-item-description">Inline description</span>
      </span>
    </span>
  </li>
)
InlineDescription.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const InlineDescriptionWithLeadingVisual = args => (
  <li className="actionList-item">
    <span className="actionList-item-content actionList-item-content--leadingVisual">
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
      <span className="actionList-item-label--inlineDescription">
        <span className="actionList-item-label">Default text only item</span>
        <span className="actionList-item-description">Inline description</span>
      </span>
    </span>
  </li>
)
InlineDescriptionWithLeadingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const InlineDescriptionWithTrailingVisual = args => (
  <li className="actionList-item">
    <span className="actionList-item-content actionList-item-content--trailingVisual">
      <span className="actionList-item-label--inlineDescription">
        <span className="actionList-item-label">Default text only item</span>
        <span className="actionList-item-description">Inline description</span>
      </span>
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
    </span>
  </li>
)
InlineDescriptionWithTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const InlineDescriptionWithLeadingAndTrailingVisual = args => (
  <li className="actionList-item">
    <span className="actionList-item-content actionList-item-content--leadingVisual actionList-item-content--trailingVisual">
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
      <span className="actionList-item-label--inlineDescription">
        <span className="actionList-item-label">Default text only item</span>
        <span className="actionList-item-description">Inline description</span>
      </span>
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
    </span>
  </li>
)
InlineDescriptionWithLeadingAndTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const ActiveNavItem = args => (
  <li className="actionList-item actionList-item--active">
    <a href="/placeholder" aria-current="page" className="actionList-item-content">
      Active nav item (page level)
    </a>
  </li>
)
ActiveNavItem.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const ActiveSubNavItem = args => (
  <li className="actionList-item actionList-item--active">
    <a href="#" aria-current="location" className="actionList-item-content">
      Active subnav item (anchor link)
    </a>
  </li>
)
ActiveSubNavItem.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const DangerItem = args => (
  <>
    <li className="actionList-item actionList-item--danger">
      <div className="actionList-item-content">
        <span className="actionList-item-label">Danger item</span>
      </div>
    </li>
  </>
)
DangerItem.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList">
        <Story />
      </ul>
    </div>
  )
]

export const MultiSelectItem = args => (
  <li className="actionList-item" role="menuitemcheckbox" aria-checked="true">
    <label className="actionList-item-content actionList-item-content--multiSelect">
      <span className="actionList-item-visual actionList-item-check">
        <input className="form-checkbox" type="checkbox" checked="" />
      </span>
      <span className="actionList-item-label">Checkbox item</span>
    </label>
  </li>
)
MultiSelectItem.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const MultiSelectItemWithLeadingVisual = args => (
  <li className="actionList-item" role="menuitemcheckbox" aria-checked="true">
    <label className="actionList-item-content actionList-item-content--multiSelect actionList-item-content--leadingVisual">
      <span className="actionList-item-visual actionList-item-check">
        <input className="form-checkbox" type="checkbox" checked="" />
      </span>
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
      <span className="actionList-item-label">Checkbox item</span>
    </label>
  </li>
)
MultiSelectItemWithLeadingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const MultiSelectItemWithTrailingVisual = args => (
  <li className="actionList-item" role="menuitemcheckbox" aria-checked="true">
    <label className="actionList-item-content actionList-item-content--multiSelect actionList-item-content--trailingVisual">
      <span className="actionList-item-visual actionList-item-check">
        <input className="form-checkbox" type="checkbox" checked="" />
      </span>
      <span className="actionList-item-label">Checkbox item</span>
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
    </label>
  </li>
)
MultiSelectItemWithTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const MultiSelectItemWithLeadingAndTrailingVisual = args => (
  <li className="actionList-item" role="menuitemcheckbox" aria-checked="true">
    <label className="actionList-item-content actionList-item-content--multiSelect actionList-item-content--leadingVisual actionList-item-content--trailingVisual">
      <span className="actionList-item-visual actionList-item-check">
        <input className="form-checkbox" type="checkbox" checked="" />
      </span>
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
      <span className="actionList-item-label">Checkbox item</span>
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
    </label>
  </li>
)
MultiSelectItemWithLeadingAndTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const SingleSelectItem = args => (
  <li className="actionList-item" role="menuitemradio" aria-checked="true">
    <span className="actionList-item-content actionList-item-content--singleSelect">
      <span className="actionList-item-visual actionList-item-check">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
        </svg>
      </span>
      <span className="actionList-item-label">Simple selected item</span>
    </span>
  </li>
)
SingleSelectItem.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const SingleSelectItemWithLeadingVisual = args => (
  <li className="actionList-item" role="menuitemradio" aria-checked="true">
    <span className="actionList-item-content actionList-item-content--singleSelect actionList-item-content--leadingVisual">
      <span className="actionList-item-visual actionList-item-check">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
        </svg>
      </span>
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
      <span className="actionList-item-label">Simple selected item</span>
    </span>
  </li>
)
SingleSelectItemWithLeadingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const SingleSelectItemWithTrailingVisual = args => (
  <li className="actionList-item" role="menuitemradio" aria-checked="true">
    <span className="actionList-item-content actionList-item-content--singleSelect actionList-item-content--trailingVisual">
      <span className="actionList-item-visual actionList-item-check">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
        </svg>
      </span>
      <span className="actionList-item-label">Simple selected item</span>
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
    </span>
  </li>
)
SingleSelectItemWithTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]

export const SingleSelectItemWithLeadingAndTrailingVisual = args => (
  <li className="actionList-item" role="menuitemradio" aria-checked="true">
    <span className="actionList-item-content actionList-item-content--singleSelect actionList-item-content--leadingVisual actionList-item-content--trailingVisual">
      <span className="actionList-item-visual actionList-item-check">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
        </svg>
      </span>
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
      <span className="actionList-item-label">Simple selected item</span>
      <span className="actionList-item-visual">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.75 4.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </span>
    </span>
  </li>
)
SingleSelectItemWithLeadingAndTrailingVisual.decorators = [
  Story => (
    <div style={{margin: '3rem', border: 'dashed 1px var(--color-scale-gray-3)'}}>
      <ul className="actionList" role="menu">
        <Story />
      </ul>
    </div>
  )
]
