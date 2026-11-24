using Apigee.Models.Enums;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApiproductsRateplansList operation.
/// </summary>
public sealed record ApigeeOrganizationsApiproductsRateplansListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (apiproductsId).
    /// </summary>
    public required string ApiproductsId { get; init; }

    /// <summary>
    /// Number of rate plans to return in the API call. Use with the <c>startKey</c> parameter to provide more targeted filtering. The maximum limit is 1000. Defaults to 100.
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Flag that specifies whether to expand the results. Set to <c>true</c> to get expanded details about each API. Defaults to <c>false</c>.
    /// </summary>
    public bool? Expand { get; init; }

    /// <summary>
    /// Name of the attribute used for sorting. Valid values include: * <c>name</c>: Name of the rate plan. * <c>state</c>: State of the rate plan (<c>DRAFT</c>, <c>PUBLISHED</c>). * <c>startTime</c>: Time when the rate plan becomes active. * <c>endTime</c>: Time when the rate plan expires. <b>Note</b>: Not supported by Apigee at this time.
    /// </summary>
    public string? OrderBy { get; init; }

    /// <summary>
    /// Name of the rate plan from which to start displaying the list of rate plans. If omitted, the list starts from the first item. For example, to view the rate plans from 51-150, set the value of <c>startKey</c> to the name of the 51st rate plan and set the value of <c>count</c> to 100.
    /// </summary>
    public string? StartKey { get; init; }

    /// <summary>
    /// State of the rate plans (<c>DRAFT</c>, <c>PUBLISHED</c>) that you want to display.
    /// </summary>
    public State13? State { get; init; }
}
