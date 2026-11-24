using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Models.Enums;

namespace Asana.Models;

public record StoryResponse
{
    /// <summary>
    /// Globally unique identifier of the resource, as a string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gid")]
    public string? Gid { get; init; }

    /// <summary>
    /// The base type of this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_type")]
    public string? ResourceType { get; init; }

    /// <summary>
    /// The time at which this resource was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_subtype")]
    public string? ResourceSubtype { get; init; }

    /// <summary>
    /// The plain text of the comment to add. Cannot be used with html_text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    /// <summary>
    /// <see href="/docs/input-output-options">Opt In</see>. HTML formatted text for a comment. This will not include the name of the creator.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html_text")]
    public string? HtmlText { get; init; }

    /// <summary>
    /// *Conditional*. Whether the story should be pinned on the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_pinned")]
    public bool? IsPinned { get; init; }

    /// <summary>
    /// The name of the sticker in this story. <c>null</c> if there is no sticker.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sticker_name")]
    public StickerName? StickerName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_by")]
    public UserCompact? CreatedBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeAsanaStoriesApi? Type { get; init; }

    /// <summary>
    /// *Conditional*. Whether the text of the story can be edited after creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_editable")]
    public bool? IsEditable { get; init; }

    /// <summary>
    /// *Conditional*. Whether the text of the story has been edited after creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_edited")]
    public bool? IsEdited { get; init; }

    /// <summary>
    /// *Deprecated - please use likes instead*
    /// *Conditional*. True if the story is hearted by the authorized user, false if not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hearted")]
    public bool? Hearted { get; init; }

    /// <summary>
    /// *Deprecated - please use likes instead*
    /// <para>
    /// *Conditional*. Array of likes for users who have hearted this story.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hearts")]
    public IReadOnlyList<Like>? Hearts { get; init; }

    /// <summary>
    /// *Deprecated - please use likes instead*
    /// <para>
    /// *Conditional*. The number of users who have hearted this story.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_hearts")]
    public int? NumHearts { get; init; }

    /// <summary>
    /// *Conditional*. True if the story is liked by the authorized user, false if not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("liked")]
    public bool? Liked { get; init; }

    /// <summary>
    /// *Conditional*. Array of likes for users who have liked this story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("likes")]
    public IReadOnlyList<Like>? Likes { get; init; }

    /// <summary>
    /// *Conditional*. The number of users who have liked this story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_likes")]
    public int? NumLikes { get; init; }

    /// <summary>
    /// *Conditional*. A collection of previews to be displayed in the story.
    /// <para>
    /// *Note: This property only exists for comment stories.*
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previews")]
    public IReadOnlyList<Preview>? Previews { get; init; }

    /// <summary>
    /// *Conditional*'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old_name")]
    public string? OldName { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_name")]
    public string? NewName { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old_dates")]
    public StoryResponseDates? OldDates { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_dates")]
    public StoryResponseDates? NewDates { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old_resource_subtype")]
    public string? OldResourceSubtype { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_resource_subtype")]
    public string? NewResourceSubtype { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story")]
    public StoryCompact2? Story { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("assignee")]
    public UserCompact1AsanaStoriesApi? Assignee { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("follower")]
    public UserCompact1AsanaStoriesApi? Follower { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old_section")]
    public SectionCompact1? OldSection { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_section")]
    public SectionCompact1? NewSection { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("task")]
    public TaskCompact1? Task { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project")]
    public ProjectCompact2AsanaStoriesApi? Project { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tag")]
    public TagCompact2? Tag { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_field")]
    public CustomFieldCompact2? CustomField { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old_text_value")]
    public string? OldTextValue { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_text_value")]
    public string? NewTextValue { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old_number_value")]
    public int? OldNumberValue { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_number_value")]
    public int? NewNumberValue { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old_enum_value")]
    public EnumOption1? OldEnumValue { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_enum_value")]
    public EnumOption1? NewEnumValue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old_date_value")]
    public OldDateValue? OldDateValue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_date_value")]
    public NewDateValue? NewDateValue { get; init; }

    /// <summary>
    /// *Conditional*. The old value of a people custom field story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old_people_value")]
    public IReadOnlyList<UserCompact>? OldPeopleValue { get; init; }

    /// <summary>
    /// *Conditional*. The new value of a people custom field story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_people_value")]
    public IReadOnlyList<UserCompact>? NewPeopleValue { get; init; }

    /// <summary>
    /// *Conditional*. The old value of a multi-enum custom field story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old_multi_enum_values")]
    public IReadOnlyList<EnumOption>? OldMultiEnumValues { get; init; }

    /// <summary>
    /// *Conditional*. The new value of a multi-enum custom field story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_multi_enum_values")]
    public IReadOnlyList<EnumOption>? NewMultiEnumValues { get; init; }

    /// <summary>
    /// *Conditional*. The new value of approval status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new_approval_status")]
    public string? NewApprovalStatus { get; init; }

    /// <summary>
    /// *Conditional*. The old value of approval status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old_approval_status")]
    public string? OldApprovalStatus { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duplicate_of")]
    public TaskCompact1? DuplicateOf { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duplicated_from")]
    public TaskCompact1? DuplicatedFrom { get; init; }

    /// <summary>
    /// *Conditional*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dependency")]
    public TaskCompact1? Dependency { get; init; }

    /// <summary>
    /// The component of the Asana product the user used to trigger the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public Source? Source { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("target")]
    public TaskCompact? Target { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
