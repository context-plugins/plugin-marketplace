using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Curlec.Core;
using Curlec.Core.Authentication;
using Curlec.Core.Exceptions;
using Curlec.Core.Models;
using Curlec.Core.Request;
using Curlec.Core.Response;
using Curlec.Errors;
using Curlec.Models;
using Curlec.Requests.XContacts;

namespace Curlec.Api;

/// <summary>
/// RazorpayX payout recipients — create, fetch, update contacts
/// </summary>
public sealed class XContacts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal XContacts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a contact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="XContact"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateContactError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a payout recipient contact. Returns existing contact if all identifying fields (name, email, contact, type) match an existing record.
    /// </remarks>
    public Task<XContact> CreateContact(CreateContactRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/contacts"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<XContact>(),
            CreateContactError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a contact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="XContact"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchContactError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch details of a specific contact by its ID.
    /// </remarks>
    public Task<XContact> FetchContact(FetchContactRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/contacts/{contact_id}"),
            [new TemplateParam("contact_id", request.ContactId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<XContact>(),
            FetchContactError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List contacts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListContactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Filter and list all contacts. Supports filtering by name, email, phone number, reference ID, and active status.
    /// </remarks>
    public Task<ContactsResponse> ListContacts(ListContactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/contacts"),
            [],
            [
                new Param("name", request.Name),
                new Param("email", request.Email),
                new Param("contact", request.Contact),
                new Param("reference_id", request.ReferenceId),
                new Param("from", request.From),
                new Param("to", request.To),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ContactsResponse>(),
            ListContactsError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update or activate/deactivate a contact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="XContact"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateContactError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update contact details or activate/deactivate a contact. Set <c>active: false</c> to deactivate.
    /// </remarks>
    public Task<XContact> UpdateContact(UpdateContactRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/contacts/{contact_id}"),
            [new TemplateParam("contact_id", request.ContactId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<XContact>(),
            UpdateContactError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
