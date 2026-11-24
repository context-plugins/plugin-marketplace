using System;
using System.Collections.Generic;

namespace Postscript.Requests.Subscribers;

/// <summary>
/// The inputs of the GetSubscribers operation.
/// </summary>
public sealed record GetSubscribersRequest
{
    /// <summary>
    /// Created at is equal to
    /// </summary>
    public DateTimeOffset? CreatedAtEq { get; init; }

    /// <summary>
    /// Created at is greater than
    /// </summary>
    public DateTimeOffset? CreatedAtGt { get; init; }

    /// <summary>
    /// Created at is greater than or equal to
    /// </summary>
    public DateTimeOffset? CreatedAtGte { get; init; }

    /// <summary>
    /// Created at is less than
    /// </summary>
    public DateTimeOffset? CreatedAtLt { get; init; }

    /// <summary>
    /// Created at is less than or equal to
    /// </summary>
    public DateTimeOffset? CreatedAtLte { get; init; }

    /// <summary>
    /// Email contains
    /// </summary>
    public string? EmailContains { get; init; }

    /// <summary>
    /// Email is equal to
    /// </summary>
    public string? EmailEq { get; init; }

    /// <summary>
    /// Email is in
    /// </summary>
    public IReadOnlyList<string>? EmailIn { get; init; }

    /// <summary>
    /// Page number of results to start from
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// Phone number contains
    /// </summary>
    public string? PhoneNumberContains { get; init; }

    /// <summary>
    /// Phone number is equal to
    /// </summary>
    public string? PhoneNumberEq { get; init; }

    /// <summary>
    /// Phone number is in
    /// </summary>
    public IReadOnlyList<string>? PhoneNumberIn { get; init; }

    /// <summary>
    /// Shopify customer id contains
    /// </summary>
    public string? ShopifyCustomerIdContains { get; init; }

    /// <summary>
    /// Shopify customer id is equal to
    /// </summary>
    public string? ShopifyCustomerIdEq { get; init; }

    /// <summary>
    /// Shopify customer id is in
    /// </summary>
    public IReadOnlyList<string>? ShopifyCustomerIdIn { get; init; }

    /// <summary>
    /// Sorting Order. In <c>{field}__asc</c> or <c>{field}__desc</c> format. Valid fields:  <c>created_at</c>, <c>updated_at</c>, <c>phone_number</c>, <c>shopify_customer_id</c>
    /// </summary>
    public string? Sort { get; init; }

    /// <summary>
    /// Updated at is equal to
    /// </summary>
    public DateTimeOffset? UpdatedAtEq { get; init; }

    /// <summary>
    /// Updated at is greater than
    /// </summary>
    public DateTimeOffset? UpdatedAtGt { get; init; }

    /// <summary>
    /// Updated at is greater than or equal to
    /// </summary>
    public DateTimeOffset? UpdatedAtGte { get; init; }

    /// <summary>
    /// Updated at is less than
    /// </summary>
    public DateTimeOffset? UpdatedAtLt { get; init; }

    /// <summary>
    /// Updated at is less than or equal to
    /// </summary>
    public DateTimeOffset? UpdatedAtLte { get; init; }

    /// <summary>
    /// Filters subscribers by their ps_id tracking ID. This ID is stored in the ps_id cookie for subscribers on the front end and is used to uniquely identify a subscriber across sessions.
    /// </summary>
    public int? PsIdEq { get; init; }

    /// <summary>
    /// Shop API Token. <b>Required for partners</b>. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.
    /// </summary>
    public string? XPostscriptShopToken { get; init; }
}
