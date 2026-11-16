using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Models;
using FinixApiReference.Requests.OnboardingForms;

namespace FinixApiReference.Api;

/// <summary>
/// Finix offers and hosts pre-built onboarding forms that you can use to collect onboarding and identity verification information from your users.
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-via-api">Onboarding via the API</see>
/// </para>
/// </summary>
public sealed class OnboardingForms
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal OnboardingForms(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an Onboarding Form
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OnboardingForm"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateOnboardingFormError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an <c>Onboarding Form</c> by entering the processor’s name you want to onboard users to. Also, provide the links to send users after they finish or leave the form.
    /// <para>
    /// You can only create an <c>Onboarding Form</c> if you have <c>ROLE_PARTNER</c> credentials.
    /// </para>
    /// </remarks>
    public Task<OnboardingForm> CreateOnboardingForm(CreateOnboardingFormRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/onboarding_forms"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OnboardingForm>(),
            CreateOnboardingFormError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an Onboarding Form Link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OnboardingLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateOnboardingFormLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a link that lets users resume their <c>Onboarding Form</c>.
    /// </remarks>
    public Task<OnboardingLink> CreateOnboardingFormLink(CreateOnboardingFormLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/onboarding_forms/{onboarding_form_id}/links"),
            [new TemplateParam("onboarding_form_id", request.OnboardingFormId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OnboardingLink>(),
            CreateOnboardingFormLinkError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch an Onboarding Form
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OnboardingForm"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOnboardingFormError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>Onboarding Form</c>.
    /// </remarks>
    public Task<OnboardingForm> GetOnboardingForm(GetOnboardingFormRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/onboarding_forms/{onboarding_form_id}"),
            [new TemplateParam("onboarding_form_id", request.OnboardingFormId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OnboardingForm>(),
            GetOnboardingFormError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
