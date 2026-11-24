using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Models.Enums;

namespace Asana.Models;

public record ProjectRequest
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
    /// Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    /// <summary>
    /// Color of the project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    public ColorAsanaProjectsApi? Color { get; init; }

    /// <summary>
    /// The time at which this resource was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// *Deprecated: new integrations should prefer the <c>current_status_update</c> resource.*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_status")]
    public ProjectStatusResponseAsanaProjectsApi? CurrentStatus { get; init; }

    /// <summary>
    /// The latest <c>status_update</c> posted to this project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_status_update")]
    public StatusUpdateCompactAsanaProjectsApi? CurrentStatusUpdate { get; init; }

    /// <summary>
    /// Array of Custom Field Settings (in compact form).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_field_settings")]
    public IReadOnlyList<CustomFieldSettingResponse>? CustomFieldSettings { get; init; }

    /// <summary>
    /// The default view (list, board, calendar, or timeline) of a project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default_view")]
    public DefaultView? DefaultView { get; init; }

    /// <summary>
    /// *Deprecated: new integrations should prefer the <c>due_on</c> field.*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("due_date")]
    public DateTimeOffset? DueDate { get; init; }

    /// <summary>
    /// The day on which this project is due. This takes a date with format YYYY-MM-DD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("due_on")]
    public DateTimeOffset? DueOn { get; init; }

    /// <summary>
    /// <see href="/docs/input-output-options">Opt In</see>. The notes of the project with formatting as HTML.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html_notes")]
    public string? HtmlNotes { get; init; }

    /// <summary>
    /// <see href="/docs/input-output-options">Opt In</see>. *Deprecated - please use a project template endpoint instead (more in <see href="https://forum.asana.com/t/a-new-api-for-project-templates/156432">this forum post</see>).* Determines if the project is a template.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_template")]
    public bool? IsTemplate { get; init; }

    /// <summary>
    /// Array of users who are members of this project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("members")]
    public IReadOnlyList<UserCompact>? Members { get; init; }

    /// <summary>
    /// The time at which this project was last modified.
    /// *Note: This does not currently reflect any changes in associations such as tasks or comments that may have been added or removed from the project.*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modified_at")]
    public DateTimeOffset? ModifiedAt { get; init; }

    /// <summary>
    /// Free-form textual information associated with the project (ie., its description).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    public string? Notes { get; init; }

    /// <summary>
    /// True if the project is public to its team.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("public")]
    public bool? Public { get; init; }

    /// <summary>
    /// The day on which work for this project begins, or null if the project has no start date. This takes a date with <c>YYYY-MM-DD</c> format. *Note: <c>due_on</c> or <c>due_at</c> must be present in the request when setting or unsetting the <c>start_on</c> parameter. Additionally, <c>start_on</c> and <c>due_on</c> cannot be the same date.*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_on")]
    public DateTimeOffset? StartOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspace")]
    public WorkspaceCompact? Workspace { get; init; }

    /// <summary>
    /// An object where each key is a Custom Field GID and each value is an enum GID, string, number, or object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields")]
    public IReadOnlyDictionary<string, string>? CustomFields { get; init; }

    /// <summary>
    /// *Create-only*. Comma separated string of users. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("followers")]
    public string? Followers { get; init; }

    /// <summary>
    /// The current owner of the project, may be null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner")]
    public string? Owner { get; init; }

    /// <summary>
    /// The team that this project is shared with.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("team")]
    public string? Team { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
