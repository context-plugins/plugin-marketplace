using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Apibara.Core;
using Apibara.Core.Exceptions;
using Apibara.Core.Extensions;
using Apibara.Core.Models;
using Apibara.Core.Request;
using Apibara.Core.Response;
using Apibara.Errors;
using Apibara.Models;
using Apibara.Requests.Vehicles;

namespace Apibara.Api;

/// <summary>
/// Search and retrieve vehicle auction records.
/// </summary>
public sealed class Vehicles
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Vehicles(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get vehicle details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VehicleDetailsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVehicleDetailsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get vehicle auction details by VIN or lot number. Use include=history,vin_lots to embed retained sale history and other known lots for the same VIN in one response. Full vehicle detail pricing.seller_reserve contains source-observed reserve status, optional confirmed price and inferred bid bounds. Unknown or ambiguous Reserve Off will not be presented as an exact reserve price.
    /// </remarks>
    public Task<VehicleDetailsResponse> GetVehicleDetails(GetVehicleDetailsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/vehicles/{slugVin}"),
            [new TemplateParam("slugVin", request.SlugVin)],
            [new Param("include", request.Include)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VehicleDetailsResponse>(),
            GetVehicleDetailsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List auction vehicles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VehicleListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAuctionVehiclesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search and incrementally synchronize normalized Copart and IAAI inventory. Filters are cumulative. Applied filters are echoed in meta.applied_filters; unrecognized query keys are reported in meta.unknown_filters. Use include_total=true only when an exact reconciliation count is required.
    /// </remarks>
    public Task<VehicleListResponse> ListAuctionVehicles(ListAuctionVehiclesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/vehicles"),
            [],
            [
                new Param("s", request.S),
                new Param("lot_status", request.LotStatus),
                new Param("lot_sub_status", request.LotSubStatus),
                new Param("upcoming", request.Upcoming),
                new Param("auction_date_pending", request.AuctionDatePending),
                new Param("updated_within_minutes", request.UpdatedWithinMinutes),
                new Param("price_min", request.PriceMin),
                new Param("price_max", request.PriceMax),
                new Param("year_from", request.YearFrom),
                new Param("year_to", request.YearTo),
                new Param("auction_type", request.AuctionType),
                new Param("platform", request.Platform),
                new Param("type", request.Type),
                new Param("body_style", request.BodyStyle),
                new Param("body_type", request.BodyType),
                new Param("make", request.Make),
                new Param("series", request.Series),
                new Param("model", request.Model),
                new Param("generation_id", request.GenerationId),
                new Param("generation", request.Generation),
                new Param("color", request.Color),
                new Param("vin_prefix", request.VinPrefix),
                new Param("fuel_type", request.FuelType),
                new Param("odometer_from", request.OdometerFrom),
                new Param("odometer_to", request.OdometerTo),
                new Param("engine_size_from", request.EngineSizeFrom),
                new Param("engine_size_to", request.EngineSizeTo),
                new Param("engine_type", request.EngineType),
                new Param("transmission", request.Transmission),
                new Param("cylinders", request.Cylinders),
                new Param("drive_type", request.DriveType),
                new Param("run_cond", request.RunCond),
                new Param("damage", request.Damage),
                new Param("has_key", request.HasKey),
                new Param("cursor", request.Cursor),
                new Param("zip", request.Zip),
                new Param("radius", request.Radius),
                new Param("units", request.Units),
                new Param("per_page", request.PerPage),
                new Param("include_total", request.IncludeTotal),
                new Param("facility_id", request.FacilityId),
                new Param("loc_state", request.LocState),
                new Param("office_name", request.OfficeName),
                new Param("auction_date_from", request.AuctionDateFrom?.ToDate()),
                new Param("auction_date_to", request.AuctionDateTo?.ToDate()),
                new Param("today_only", request.TodayOnly),
                new Param("sale_document_pending", request.SaleDocumentPending),
                new Param("sale_document_type", request.SaleDocumentType),
                new Param("seller_type", request.SellerType),
                new Param("has_shipping_price", request.HasShippingPrice),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VehicleListResponse>(),
            ListAuctionVehiclesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
