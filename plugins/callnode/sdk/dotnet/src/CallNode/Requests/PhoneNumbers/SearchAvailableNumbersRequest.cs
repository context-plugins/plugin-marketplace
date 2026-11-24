using System.ComponentModel.DataAnnotations;
using CallNode.Core.Validation.Attributes;
using CallNode.Models.Enums;

namespace CallNode.Requests.PhoneNumbers;

/// <summary>
/// The inputs of the SearchAvailableNumbers operation.
/// </summary>
public sealed record SearchAvailableNumbersRequest
{
    public Type3 Type { get; init; } = Type3.Local;

    /// <summary>
    /// 3-digit area code. Required when <c>type</c> is <c>local</c>.
    /// </summary>
    [RegularExpression("^\\d{3}$")]
    public string? AreaCode { get; init; }

    /// <summary>
    /// Toll-free prefix filter. 800 and 822 are usually exhausted.
    /// </summary>
    public Prefix? Prefix { get; init; }

    /// <summary>
    /// Toll-free vanity word, 4–7 letters or digits (e.g. NEWCAR). Takes precedence over <c>prefix</c>.
    /// </summary>
    [StringLength(7, MinimumLength = 4)]
    public string? Vanity { get; init; }

    /// <summary>
    /// How many candidates to return.
    /// </summary>
    [Minimum(1)]
    [Maximum(25)]
    public int Quantity { get; init; } = 10;
}
