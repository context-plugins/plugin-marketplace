using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Boomi.Core;
using Boomi.Core.Exceptions;
using Boomi.Core.Models;
using Boomi.Core.Request;
using Boomi.Core.Response;
using Boomi.Errors;
using Boomi.Models;
using Boomi.Requests.Atoms;

namespace Boomi.Api;

/// <summary>
/// Manage Boomi Atoms — the lightweight runtime engines that execute integration processes.
/// </summary>
public sealed class Atoms
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Atoms(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Boomi Delete an Atom
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAtomError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes an Atom from the Boomi platform. The Atom must be offline before it can be deleted.
    /// </remarks>
    public Task DeleteAtom(DeleteAtomRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Atom/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAtomError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Get an Atom
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Atom"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAtomError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the details of a specific Boomi Atom (runtime engine) by its ID.
    /// </remarks>
    public Task<Atom> GetAtom(GetAtomRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Atom/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Atom>(),
            GetAtomError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Query Atoms
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AtomQueryResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QueryAtomsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of Atoms matching the specified filter criteria, including online/offline status and environment associations.
    /// </remarks>
    public Task<AtomQueryResult> QueryAtoms(QueryAtomsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Atom/query"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AtomQueryResult>(),
            QueryAtomsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Boomi Update an Atom
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Atom"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateAtomError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the name or purge schedule of an existing Boomi Atom.
    /// </remarks>
    public Task<Atom> UpdateAtom(UpdateAtomRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Atom/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Atom>(),
            UpdateAtomError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
