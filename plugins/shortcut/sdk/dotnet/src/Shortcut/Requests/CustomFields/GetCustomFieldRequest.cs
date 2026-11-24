using System;

namespace Shortcut.Requests.CustomFields;

/// <summary>
/// The inputs of the GetCustomField operation.
/// </summary>
public sealed record GetCustomFieldRequest
{
    /// <summary>
    /// The unique ID of the CustomField.
    /// </summary>
    public required Guid CustomFieldPublicId { get; init; }
}
