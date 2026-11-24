using System;

namespace Shortcut.Requests.CustomFields;

/// <summary>
/// The inputs of the DeleteCustomField operation.
/// </summary>
public sealed record DeleteCustomFieldRequest
{
    /// <summary>
    /// The unique ID of the CustomField.
    /// </summary>
    public required Guid CustomFieldPublicId { get; init; }
}
