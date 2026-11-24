using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Title of the error
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TitleReportingReportsApi>))]
public sealed record TitleReportingReportsApi : OpenStringEnum<TitleReportingReportsApi>
{
    private TitleReportingReportsApi(string value) : base(value)
    {
    }

    public static readonly TitleReportingReportsApi ConnectionSourceNotSupported = new(
        "Connection source not supported.");

    public static readonly TitleReportingReportsApi InvalidUsersFilterMaximum5UsersAllowed = new(
        "Invalid users filter. Maximum 5 users allowed.");

    public static readonly TitleReportingReportsApi TheFollowingAccountsAreDuplicated121332232949433 = new(
        "The following accounts are duplicated: \n['121', '332'], ['232', '949', '433'].");

    public static readonly TitleReportingReportsApi FollowingUserIdSAccountIdSHaveBeenEnteredMoreThanOnce123123 = new(
        "Following user ID(s)/account ID(s) have been entered more than once: \n[\"123\", \"123\"].");

    public TResult Match<TResult>(Func<TResult> onConnectionSourceNotSupported,
        Func<TResult> onInvalidUsersFilterMaximum5UsersAllowed,
        Func<TResult> onTheFollowingAccountsAreDuplicated121332232949433,
        Func<TResult> onFollowingUserIdSAccountIdSHaveBeenEnteredMoreThanOnce123123,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ConnectionSourceNotSupported => onConnectionSourceNotSupported(),
            _ when this == InvalidUsersFilterMaximum5UsersAllowed => onInvalidUsersFilterMaximum5UsersAllowed(),
            _ when this ==
                TheFollowingAccountsAreDuplicated121332232949433 => onTheFollowingAccountsAreDuplicated121332232949433(),
            _ when this ==
                FollowingUserIdSAccountIdSHaveBeenEnteredMoreThanOnce123123 => onFollowingUserIdSAccountIdSHaveBeenEnteredMoreThanOnce123123(),
            _ => otherwise(Value)
        };

    public void Match(Action onConnectionSourceNotSupported,
        Action onInvalidUsersFilterMaximum5UsersAllowed,
        Action onTheFollowingAccountsAreDuplicated121332232949433,
        Action onFollowingUserIdSAccountIdSHaveBeenEnteredMoreThanOnce123123,
        Action<string> otherwise)
    {
        if (this == ConnectionSourceNotSupported) onConnectionSourceNotSupported();
        else if (this == InvalidUsersFilterMaximum5UsersAllowed) onInvalidUsersFilterMaximum5UsersAllowed();
        else if (this ==
            TheFollowingAccountsAreDuplicated121332232949433) onTheFollowingAccountsAreDuplicated121332232949433();
        else if (this ==
            FollowingUserIdSAccountIdSHaveBeenEnteredMoreThanOnce123123) onFollowingUserIdSAccountIdSHaveBeenEnteredMoreThanOnce123123();
        else otherwise(Value);
    }
}
