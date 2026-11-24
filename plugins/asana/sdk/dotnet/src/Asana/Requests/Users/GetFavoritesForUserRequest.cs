using System.Collections.Generic;
using Asana.Models.Enums;

namespace Asana.Requests.Users;

/// <summary>
/// The inputs of the GetFavoritesForUser operation.
/// </summary>
public sealed record GetFavoritesForUserRequest
{
    /// <summary>
    /// A string identifying a user. This can either be the string "me", an email, or the gid of a user.
    /// </summary>
    public required string UserGid { get; init; }

    /// <summary>
    /// The resource type of favorites to be returned.
    /// </summary>
    public ResourceTypeAsanaUsersApi ResourceType { get; init; } = ResourceTypeAsanaUsersApi.Project;

    /// <summary>
    /// The workspace in which to get favorites.
    /// </summary>
    public required string Workspace { get; init; }

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
}
