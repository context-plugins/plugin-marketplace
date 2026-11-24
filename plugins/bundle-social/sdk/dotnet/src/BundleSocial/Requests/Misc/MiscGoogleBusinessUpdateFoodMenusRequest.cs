using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessUpdateFoodMenus operation.
/// </summary>
public sealed record MiscGoogleBusinessUpdateFoodMenusRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscGoogleBusinessLocationFoodMenusRequest? Body { get; init; }
}
