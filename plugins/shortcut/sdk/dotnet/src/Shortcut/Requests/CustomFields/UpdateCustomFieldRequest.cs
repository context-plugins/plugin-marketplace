using System;
using Shortcut.Models;

namespace Shortcut.Requests.CustomFields;

/// <summary>
/// The inputs of the UpdateCustomField operation.
/// </summary>
public sealed record UpdateCustomFieldRequest
{
    /// <summary>
    /// The unique ID of the CustomField.
    /// </summary>
    public required Guid CustomFieldPublicId { get; init; }

    public required UpdateCustomField Body { get; init; }
}
