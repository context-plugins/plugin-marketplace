using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Models;
using FinixApiReference.Requests.ComplianceForms;

namespace FinixApiReference.Api;

/// <summary>
/// To process payments, your Merchants must validate their compliance with PCI DSS requirements annually. To do this, your Merchants must attest to PCI Self-Assessment Questionnaire (SAQ) compliance forms.
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/managing-operations/security-compliance/managing-pci-compliance">Managing PCI Compliance</see>
/// - <see href="/guides/managing-operations/security-compliance/pci-dss-compliance">PCI DSS Compliance</see>
/// </para>
/// </summary>
public sealed class ComplianceForms
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ComplianceForms(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Fetch a Compliance Form
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ComplianceForm"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetComplianceFormError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Finix sends a <see href="/additional-resources/developers/webhooks/webhook-events#compliance-form-created">webhook</see> whenever a new <c>Compliance Form</c> is created for your Merchant. Using the ID, you can retrieve the <c>Compliance Form</c>.
    /// </remarks>
    public Task<ComplianceForm> GetComplianceForm(GetComplianceFormRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/compliance_forms/{compliance_form_id}"),
            [new TemplateParam("compliance_form_id", request.ComplianceFormId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ComplianceForm>(),
            GetComplianceFormError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Compliance Forms
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListComplianceForms"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListComplianceFormsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of Compliance Form resources.
    /// </remarks>
    public Task<ListComplianceForms> ListComplianceForms(ListComplianceFormsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/compliance_forms"),
            [],
            [
                new Param("linked_to", request.LinkedTo),
                new Param("state", request.State),
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListComplianceForms>(),
            ListComplianceFormsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Complete a Compliance Form
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ComplianceForm"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateComplianceFormError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// As part of onboarding, your Merchants need to review and agree to their <c>Compliance Form</c>. Afterward, you need to update their <c>Compliance Form</c> with details about their digital signature. Finix will update their <c>Compliance Form</c> with those details, along with a reference to the new <c>signed_file</c> with their digital signature.
    /// <para>
    /// For more information, see <see href="/guides/managing-operations/security-compliance/managing-pci-compliance#completing-compliance-forms">Managing Compliance Forms</see>.
    /// </para>
    /// </remarks>
    public Task<ComplianceForm> UpdateComplianceForm(UpdateComplianceFormRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/compliance_forms/{compliance_form_id}"),
            [new TemplateParam("compliance_form_id", request.ComplianceFormId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ComplianceForm>(),
            UpdateComplianceFormError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
