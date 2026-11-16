namespace FinixApiReference.Requests.Users;

/// <summary>
/// The inputs of the GetUser operation.
/// </summary>
public sealed record GetUserRequest
{
    /// <summary>
    /// ID of <c>User</c> object.
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
