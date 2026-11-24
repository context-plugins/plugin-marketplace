using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CommonElements.Core;
using CommonElements.Core.Exceptions;
using CommonElements.Core.Extensions;
using CommonElements.Core.Models;
using CommonElements.Core.Request;
using CommonElements.Core.Response;
using CommonElements.Errors;
using CommonElements.Models;
using CommonElements.Requests.AssociationResources;

namespace CommonElements.Api;

/// <summary>
/// Public record joined to one association: parcels, structures, permits, code enforcement, hazards, insurance, legal, financials, governance and documents. Same request shape for every one, so a client written against one works against all ten.
/// </summary>
public sealed class AssociationResources
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AssociationResources(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Governing and recorded documents held for the association, with their source…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsDocumentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResourceAssociationDocumentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Governing and recorded documents held for the association, with their source and recording date. Live description, provenance and coverage caveat come from /api/v1/datasets.
    /// <para>
    /// <b>Plan:</b> Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Read <c>meta.coverage</c> before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsDocumentsResponse> ResourceAssociationDocuments(ResourceAssociationDocumentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/documents"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("source", request.Source),
                new Param("since", request.Since?.ToDate()),
                new Param("until", request.Until?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsDocumentsResponse>(),
            ResourceAssociationDocumentsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Financial public record for the association, including IRS Form 990 filings…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsFinancialsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResourceAssociationFinancialsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Financial public record for the association, including IRS Form 990 filings where it files one. Live description, provenance and coverage caveat come from /api/v1/datasets.
    /// <para>
    /// <b>Plan:</b> Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Read <c>meta.coverage</c> before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsFinancialsResponse> ResourceAssociationFinancials(ResourceAssociationFinancialsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/financials"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("source", request.Source),
                new Param("since", request.Since?.ToDate()),
                new Param("until", request.Until?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsFinancialsResponse>(),
            ResourceAssociationFinancialsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Governance record for the association: filings, officers over time, and…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsGovernanceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResourceAssociationGovernanceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Governance record for the association: filings, officers over time, and registered agent history. Live description, provenance and coverage caveat come from /api/v1/datasets.
    /// <para>
    /// <b>Plan:</b> Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Read <c>meta.coverage</c> before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsGovernanceResponse> ResourceAssociationGovernance(ResourceAssociationGovernanceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/governance"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("source", request.Source),
                new Param("since", request.Since?.ToDate()),
                new Param("until", request.Until?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsGovernanceResponse>(),
            ResourceAssociationGovernanceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Natural-hazard exposure for the association's location: recorded storm events…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsHazardsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResourceAssociationHazardsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Natural-hazard exposure for the association's location: recorded storm events and county-level risk. Live description, provenance and coverage caveat come from /api/v1/datasets.
    /// <para>
    /// <b>Plan:</b> Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Read <c>meta.coverage</c> before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsHazardsResponse> ResourceAssociationHazards(ResourceAssociationHazardsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/hazards"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("source", request.Source),
                new Param("since", request.Since?.ToDate()),
                new Param("until", request.Until?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsHazardsResponse>(),
            ResourceAssociationHazardsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Insurance-side public record touching the association, including coverage and…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsInsuranceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResourceAssociationInsuranceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Insurance-side public record touching the association, including coverage and carrier filings where published. Live description, provenance and coverage caveat come from /api/v1/datasets.
    /// <para>
    /// <b>Plan:</b> Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Read <c>meta.coverage</c> before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsInsuranceResponse> ResourceAssociationInsurance(ResourceAssociationInsuranceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/insurance"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("source", request.Source),
                new Param("since", request.Since?.ToDate()),
                new Param("until", request.Until?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsInsuranceResponse>(),
            ResourceAssociationInsuranceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Litigation and legal history recorded against the association, and the counsel…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsLegalResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResourceAssociationLegalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Litigation and legal history recorded against the association, and the counsel of record where published. Live description, provenance and coverage caveat come from /api/v1/datasets.
    /// <para>
    /// <b>Plan:</b> Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Read <c>meta.coverage</c> before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsLegalResponse> ResourceAssociationLegal(ResourceAssociationLegalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/legal"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("source", request.Source),
                new Param("since", request.Since?.ToDate()),
                new Param("until", request.Until?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsLegalResponse>(),
            ResourceAssociationLegalError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// County parcel records matched to the association: the physical footprint behind…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsParcelsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResourceAssociationParcelsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// County parcel records matched to the association: the physical footprint behind the corporate record. Live description, provenance and coverage caveat come from /api/v1/datasets.
    /// <para>
    /// <b>Plan:</b> Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Read <c>meta.coverage</c> before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsParcelsResponse> ResourceAssociationParcels(ResourceAssociationParcelsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/parcels"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("source", request.Source),
                new Param("since", request.Since?.ToDate()),
                new Param("until", request.Until?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsParcelsResponse>(),
            ResourceAssociationParcelsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Municipal building permits recorded against the association, with work type…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsPermitsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResourceAssociationPermitsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Municipal building permits recorded against the association, with work type, value and date. Live description, provenance and coverage caveat come from /api/v1/datasets.
    /// <para>
    /// <b>Plan:</b> Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Read <c>meta.coverage</c> before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsPermitsResponse> ResourceAssociationPermits(ResourceAssociationPermitsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/permits"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("source", request.Source),
                new Param("since", request.Since?.ToDate()),
                new Param("until", request.Until?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsPermitsResponse>(),
            ResourceAssociationPermitsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Building footprints and recorded structural characteristics for the…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsStructuresResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResourceAssociationStructuresError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Building footprints and recorded structural characteristics for the association's buildings. Live description, provenance and coverage caveat come from /api/v1/datasets.
    /// <para>
    /// <b>Plan:</b> Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Read <c>meta.coverage</c> before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsStructuresResponse> ResourceAssociationStructures(ResourceAssociationStructuresRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/structures"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("source", request.Source),
                new Param("since", request.Since?.ToDate()),
                new Param("until", request.Until?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsStructuresResponse>(),
            ResourceAssociationStructuresError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Code enforcement cases recorded against the association by the local…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsViolationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResourceAssociationViolationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Code enforcement cases recorded against the association by the local jurisdiction. Live description, provenance and coverage caveat come from /api/v1/datasets.
    /// <para>
    /// <b>Plan:</b> Row access is plan-gated per source; counts and coverage are returned at every plan so the size of what is behind the gate is visible.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Read <c>meta.coverage</c> before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsViolationsResponse> ResourceAssociationViolations(ResourceAssociationViolationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/violations"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("source", request.Source),
                new Param("since", request.Since?.ToDate()),
                new Param("until", request.Until?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsViolationsResponse>(),
            ResourceAssociationViolationsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
