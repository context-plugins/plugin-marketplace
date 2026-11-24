using System.Collections.Generic;
using Asana.Core.Models;
using Asana.Models.Enums;

namespace Asana.Requests.Attachments;

/// <summary>
/// The inputs of the CreateAttachmentForObject operation.
/// </summary>
public sealed record CreateAttachmentForObjectRequest
{
    /// <summary>
    /// Provides “pretty” output.
    /// Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    /// </summary>
    public bool? OptPretty { get; init; }

    /// <summary>
    /// Defines fields to return.
    /// Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
    /// The id of included objects will always be returned, regardless of the field options.
    /// </summary>
    public IReadOnlyList<string>? OptFields { get; init; }

    /// <summary>
    /// The type of the attachment. Must be one of the given values. If not specified, a file attachment of type <c>asana</c> will be assumed. Note that if the value of <c>resource_subtype</c> is <c>external</c>, a <c>parent</c>, <c>name</c>, and <c>url</c> must also be provided.
    /// </summary>
    public ResourceSubtype1? ResourceSubtype { get; init; }

    /// <summary>
    /// Required for <c>asana</c> attachments.
    /// </summary>
    public BinaryContent? File { get; init; }

    /// <summary>
    /// Required identifier of the parent task, project, or project_brief, as a string.
    /// </summary>
    public string? Parent { get; init; }

    /// <summary>
    /// The URL of the external resource being attached. Required for attachments of type <c>external</c>.
    /// </summary>
    public string? Url { get; init; }

    /// <summary>
    /// The name of the external resource being attached. Required for attachments of type <c>external</c>.
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// *Optional*. Only relevant for external attachments with a parent task. A boolean indicating whether the current app should be connected with the attachment for the purposes of showing an app components widget. Requires the app to have been added to a project the parent task is in.
    /// </summary>
    public bool? ConnectToApp { get; init; }
}
