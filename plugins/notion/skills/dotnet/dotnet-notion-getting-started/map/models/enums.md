# Enums

22 enums (22 string / 0 int), namespace `Notion.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `Direction` | StringEnum | `Ascending (ascending)`, `Descending (descending)` | The sort direction. | `Models/Enums/Direction.cs` |
| `Object1` | StringEnum | `Block (block)` | Always "block" for block objects. | `Models/Enums/Object1.cs` |
| `Object11` | StringEnum | `Comment (comment)` | Always "comment" for comment objects. | `Models/Enums/Object11.cs` |
| `Object12` | StringEnum | `Database (database)` | Always "database" for database objects. | `Models/Enums/Object12.cs` |
| `Object2` | StringEnum | `User (user)` | Always "user"., Always "user" for user objects. | `Models/Enums/Object2.cs` |
| `Object21` | StringEnum | `Page (page)` | Always "page" for page objects. | `Models/Enums/Object21.cs` |
| `Object3` | StringEnum | `Error (error)` | Always "error" for error responses. | `Models/Enums/Object3.cs` |
| `ObjectModel` | StringEnum | `List (list)` | Always "list" for paginated responses. | `Models/Enums/ObjectModel.cs` |
| `Property` | StringEnum | `Object (object)` | Must be "object". | `Models/Enums/Property.cs` |
| `Timestamp` | StringEnum | `CreatedTime (created_time)`, `LastEditedTime (last_edited_time)` | The timestamp to sort by. Possible values are created_time or last_edited_time. | `Models/Enums/Timestamp.cs` |
| `Timestamp1` | StringEnum | `LastEditedTime (last_edited_time)` | The timestamp to sort by. | `Models/Enums/Timestamp1.cs` |
| `Type1` | StringEnum | `Paragraph (paragraph)`, `Heading1 (heading_1)`, `Heading2 (heading_2)`, `Heading3 (heading_3)`, `BulletedListItem (bulleted_list_item)`, `NumberedListItem (numbered_list_item)`, `ToDo (to_do)`, `Toggle (toggle)`, `ChildPage (child_page)`, `ChildDatabase (child_database)`, `Embed (embed)`, `Image (image)`, `Video (video)`, `File (file)`, `Pdf (pdf)`, `Bookmark (bookmark)`, `Callout (callout)`, `Quote (quote)`, `Equation (equation)`, `Divider (divider)`, `TableOfContents (table_of_contents)`, `ColumnList (column_list)`, `Column (column)`, `LinkPreview (link_preview)`, `SyncedBlock (synced_block)`, `Template (template)`, `LinkToPage (link_to_page)`, `Table (table)`, `TableRow (table_row)`, `Code (code)`, `Audio (audio)`, `Breadcrumb (breadcrumb)` | The type of block. Determines which type-specific content field is present. Common types include paragraph, heading_1, heading_2, heading_3, bulleted_list_item, numbered_list_item, to_do, toggle, code, image, divider, table, and many more. | `Models/Enums/Type1.cs` |
| `Type11` | StringEnum | `PageId (page_id)`, `BlockId (block_id)` | — | `Models/Enums/Type11.cs` |
| `Type12` | StringEnum | `Workspace (workspace)`, `User (user)` | — | `Models/Enums/Type12.cs` |
| `Type2` | StringEnum | `Text (text)`, `Mention (mention)`, `Equation (equation)` | The type of this rich text object. | `Models/Enums/Type2.cs` |
| `Type21` | StringEnum | `File (file)`, `External (external)` | The type of file hosting. | `Models/Enums/Type21.cs` |
| `Type3` | StringEnum | `Emoji (emoji)` | Always "emoji". | `Models/Enums/Type3.cs` |
| `Type31` | StringEnum | `Title (title)`, `RichText (rich_text)`, `Number (number)`, `Select (select)`, `MultiSelect (multi_select)`, `Date (date)`, `People (people)`, `Files (files)`, `Checkbox (checkbox)`, `Url (url)`, `Email (email)`, `PhoneNumber (phone_number)`, `Formula (formula)`, `Relation (relation)`, `Rollup (rollup)`, `CreatedTime (created_time)`, `CreatedBy (created_by)`, `LastEditedTime (last_edited_time)`, `LastEditedBy (last_edited_by)`, `Status (status)`, `UniqueId (unique_id)`, `Verification (verification)` | The type of property. | `Models/Enums/Type31.cs` |
| `Type4` | StringEnum | `Person (person)`, `Bot (bot)` | The type of user. "person" for human workspace members, "bot" for API integrations. | `Models/Enums/Type4.cs` |
| `Type5` | StringEnum | `External (external)` | Always "external". | `Models/Enums/Type5.cs` |
| `TypeModel` | StringEnum | `DatabaseId (database_id)`, `PageId (page_id)`, `BlockId (block_id)`, `Workspace (workspace)` | The type of parent. | `Models/Enums/TypeModel.cs` |
| `Value` | StringEnum | `Page (page)`, `Database (database)` | The type of object to filter by. | `Models/Enums/Value.cs` |
