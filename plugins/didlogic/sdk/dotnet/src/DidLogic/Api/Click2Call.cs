using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DidLogic.Core;
using DidLogic.Core.Authentication;
using DidLogic.Core.Exceptions;
using DidLogic.Core.Models;
using DidLogic.Core.Request;
using DidLogic.Core.Response;
using DidLogic.Errors;
using DidLogic.Models;
using DidLogic.Requests.Click2Call;

namespace DidLogic.Api;

public sealed class Click2Call
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Click2Call(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Place a Click2Call call
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1Click2CallResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Click2CallCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Places one call: the platform connects the agent leg first and, once it
    /// answers, dials the destination number (the customer leg) and bridges the
    /// two. The agent leg is one of your SIP accounts by default, or your own
    /// WebSocket endpoint with <c>a_type: stream</c>. The response is the call resource in its initial <c>accepted</c> state. Poll
    /// <c>GET /api/v1/click2call/{id}</c> for progress. &gt; <b><c>a_type: stream</c> requires an endpoint that speaks our protocol.</b> The
    /// &gt; message shapes, the audio format and what answers the call are described in
    /// &gt; WebSocket Calls. ### States
    /// <para>
    /// <c>accepted</c> → <c>agent_ringing</c> → <c>agent_answered</c> → <c>customer_ringing</c> →
    /// <c>bridged</c> → <c>completed</c>, with <c>failed</c> reachable from any of them. &gt; <b><c>agent_ringing</c> is best-effort.</b> It is derived from a ringing
    /// &gt; indication on the agent leg, which some user agents never send, so it may
    /// &gt; be skipped entirely — a call can go straight from <c>accepted</c> to
    /// &gt; <c>agent_answered</c>. Do not require <c>agent_ringing</c> in client logic. ### Webhooks
    /// </para>
    /// <para>
    /// Pass <c>callback_url</c> and we POST a JSON body to it on every transition of the
    /// call. It must be an <c>https</c> URL on a public host, at most 255 characters;
    /// anything else is refused with <c>422</c> and no call is placed. Delivery is per
    /// call — there is no per-account setting, and calls placed without the field
    /// get no webhooks. | Event | Fires when |
    /// |-------|-----------|
    /// | <c>click2call.agent_ringing</c> | the agent leg starts ringing |
    /// | <c>click2call.agent_answered</c> | the agent leg answers |
    /// | <c>click2call.customer_ringing</c> | the destination is dialled |
    /// | <c>click2call.bridged</c> | the two legs are bridged |
    /// | <c>click2call.completed</c> | the call ends normally |
    /// | <c>click2call.failed</c> | the call ends any other way |
    /// | <c>click2call.finalized</c> | the billed record is committed |
    /// </para>
    /// <para>
    /// The body is <c>{"event": …, "occurred_at": …, "event_seq": …, "data": {…}}</c>,
    /// where <c>data</c> is the same call resource this endpoint returns. New fields may
    /// appear in <c>data</c> and new names in the <c>click2call.*</c> namespace at any time:
    /// ignore what you do not recognise. &gt; **<c>click2call.completed</c> and <c>.failed</c> fire immediately, with <c>cost</c> still
    /// &gt; <c>null</c>.** <c>click2call.finalized</c> follows once billing has settled and
    /// &gt; carries the priced document. The two can arrive out of order — <c>.finalized</c>
    /// &gt; does not mean nothing more is coming. Order is recoverable only from
    /// &gt; <c>event_seq</c>, which increases within a call. Requests are <b>not signed</b>. Treat the call id as unguessable, not as proof
    /// of origin, and confirm anything that matters with
    /// <c>GET /api/v1/click2call/{id}</c>. <b>Delivery.</b> Answer <c>2xx</c> within 15 seconds. A <c>408</c>, <c>429</c>, <c>5xx</c> or a
    /// transport failure is retried up to five times with exponential backoff from
    /// 30 seconds, honouring <c>Retry-After</c>; any other <c>4xx</c> is treated as permanent
    /// and never retried. Delivery is at-least-once, so the same <c>event_seq</c> can
    /// arrive twice. ### Recordings
    /// </para>
    /// <para>
    /// <c>recording_url</c> is <c>null</c> until the call is settled, and stays <c>null</c> for a
    /// call that was not recorded. It rides in the same <c>data</c> of every
    /// <c>click2call.*</c> webhook, so <c>click2call.finalized</c> is where it first appears. <b>Default.</b> <c>recording_url</c> is a signed S3 link valid for 1 hour. Each read
    /// of the call (click2call_show) mints a fresh one. Once it has expired, fetch
    /// the file through calls_recording. <b>Permanent links.</b> Enabled on request through your account manager or
    /// support. <c>recording_url</c> becomes <c>/api/v1/recordings/{user_id}/{token}</c>,
    /// which needs no authentication and answers <c>302</c> to a signed URL valid for
    /// 5 minutes, <c>404</c> when the recording is no longer retained or the option is
    /// turned off, and <c>429</c> with <c>Retry-After</c> past the per-minute download limit. Details: recordings_show. ### Caller ID
    /// </para>
    /// <para>
    /// While the agent's phone rings it shows the destination number as the
    /// caller. Pass <c>a_cli</c> to show a number of your choice instead — for example
    /// when your agents must not see where the call is going.
    /// </para>
    /// </remarks>
    public Task<ApiV1Click2CallResponse> Click2CallCreate(Click2CallCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/click2call"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1Click2CallResponse>(),
            Click2CallCreateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel a Click2Call call
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Click2CallDestroyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Hangs the call up, whatever leg it has reached — before anyone answered, or
    /// mid-conversation. The response is <c>204 No Content</c> with an empty body.
    /// <para>
    /// ### Repeating the cancel is safe
    /// </para>
    /// <para>
    /// A repeated <c>DELETE</c> also answers <c>204</c>. The request is recorded once and
    /// every repeat gets the same answer, so a client that retries on a timeout
    /// cannot get a spurious failure. Do <b>not</b> read a second <c>204</c> as "there was
    /// still a call to hang up".
    /// </para>
    /// <para>
    /// ### What the cancel shows up as
    /// </para>
    /// <para>
    /// A cancel that actually ended the call reads back with <c>reason</c> <c>canceled</c>.
    /// Its <c>state</c> is <c>completed</c> if the two legs had already been bridged, and
    /// <c>failed</c> if the call was hung up before it came together.
    /// </para>
    /// <para>
    /// If the call had <b>already</b> ended on its own before your <c>DELETE</c> arrived, its
    /// original <c>reason</c> is kept — a call nobody answered still reads <c>no_answer</c>.
    /// Cleaning up with a defensive <c>DELETE</c> therefore cannot hide why a call ended.
    /// </para>
    /// <para>
    /// ### <c>404</c>
    /// </para>
    /// <para>
    /// <c>404 call_not_found</c> means the call is unknown to you: it never existed, the
    /// ID is malformed, it belongs to another account, or it is older than the
    /// 12-hour retention window — which runs from when the call was <b>placed</b>, not
    /// from when it ended. The cases are deliberately indistinguishable.
    /// </para>
    /// <para>
    /// See also: click2call_show, which reads the call back after the cancel.
    /// </para>
    /// </remarks>
    public Task Click2CallDestroy(Click2CallDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/click2call/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            Click2CallDestroyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Read a Click2Call call
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1Click2CallResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Click2CallShowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the current state of one call. This is the polling endpoint: call it
    /// until <c>state</c> is <c>completed</c> or <c>failed</c>.
    /// <para>
    /// ### States
    /// </para>
    /// <para>
    /// | State | Meaning |
    /// |---|---|
    /// | <c>accepted</c> | The call was placed; no leg has moved yet |
    /// | <c>agent_ringing</c> | Your SIP account is ringing — <b>best-effort, may be skipped</b> |
    /// | <c>agent_answered</c> | Your SIP account answered |
    /// | <c>customer_ringing</c> | The destination is being dialled |
    /// | <c>bridged</c> | Both legs are up and talking |
    /// | <c>completed</c> | The call ended normally |
    /// | <c>failed</c> | The call did not come together |
    /// </para>
    /// <para>
    /// <c>agent_ringing</c> is derived from a ringing indication on the agent leg, which
    /// some user agents never send. A call may therefore go straight from
    /// <c>accepted</c> to <c>agent_answered</c>; clients must not require <c>agent_ringing</c>.
    /// </para>
    /// <para>
    /// ### <c>reason</c>
    /// </para>
    /// <para>
    /// <c>reason</c> answers *why the call ended*, on its own axis from <c>state</c>. It is
    /// <c>null</c> while the call is live <b>and</b> on a normal end. Otherwise it is one
    /// of <c>no_answer</c>, <c>busy</c>, <c>unreachable</c>, <c>canceled</c>, <c>timed_out</c> or
    /// <c>platform_error</c>. A call your own <c>DELETE</c> ended reports <c>canceled</c> —
    /// including when it had already been answered, in which case <c>state</c> is
    /// <c>completed</c>. A <c>DELETE</c> that arrives after the call has already ended leaves
    /// the original reason in place.
    /// </para>
    /// <para>
    /// ### Retention
    /// </para>
    /// <para>
    /// A call is readable for <b>12 hours from the moment it was placed</b> — not from
    /// the moment it ended. After that the record is gone and this endpoint answers
    /// <c>404</c>. Call history is a separate product surface.
    /// </para>
    /// <para>
    /// ### Recordings
    /// </para>
    /// <para>
    /// <c>recording_url</c> is <c>null</c> until the call is settled, and stays <c>null</c> for a
    /// call that was not recorded.
    /// </para>
    /// <para>
    /// <b>Default.</b> <c>recording_url</c> is a signed S3 link valid for 1 hour, minted
    /// fresh on each read. Once it has expired, fetch the file through
    /// calls_recording.
    /// </para>
    /// <para>
    /// <b>Permanent links.</b> Enabled on request through your account manager or
    /// support. <c>recording_url</c> becomes <c>/api/v1/recordings/{user_id}/{token}</c>,
    /// which needs no authentication and answers <c>302</c> to a signed URL valid for
    /// 5 minutes. It answers <c>404</c> when the recording is no longer retained or the
    /// option is turned off, and <c>429</c> with <c>Retry-After</c> past the per-minute
    /// download limit. Details: recordings_show.
    /// </para>
    /// <para>
    /// This link is the <c>recording_url</c> returned by click2call_create,
    /// click2call_show and their <c>click2call.*</c> webhooks, and sent in the
    /// call-recording webhook. Without permanent links enabled, <c>recording_url</c>
    /// holds a temporary pre-signed URL; to fetch a recording after it expires,
    /// use calls_recording.
    /// </para>
    /// <para>
    /// ### <c>404</c>
    /// </para>
    /// <para>
    /// <c>404 call_not_found</c> means the call is unknown to you: it never existed, the
    /// ID is malformed, it belongs to another account, or it has fallen out of the
    /// 12-hour window. The cases are deliberately indistinguishable.
    /// </para>
    /// <para>
    /// <c>data.recording_url</c> feeds recordings_show. See also: click2call_destroy.
    /// </para>
    /// </remarks>
    public Task<ApiV1Click2CallResponse1> Click2CallShow(Click2CallShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/click2call/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1Click2CallResponse1>(),
            Click2CallShowError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download a recording from a permanent link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RecordingsShowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Downloads a call recording from the permanent link carried in <c>recording_url</c> when the
    /// account has permanent recording links enabled. The link needs no authentication.
    /// <para>
    /// - <c>302</c> redirects to a signed download of the recording, valid for 5 minutes.
    /// - <c>404</c> when the link is invalid, the recording is no longer retained, or permanent
    /// recording links are turned off for the account.
    /// - <c>429</c> with a <c>Retry-After</c> header when the account exceeds its per-minute download limit.
    /// </para>
    /// <para>
    /// This link is the <c>recording_url</c> returned by click2call_create, click2call_show and their
    /// <c>click2call.*</c> webhooks, and sent in the call-recording webhook.
    /// </para>
    /// <para>
    /// Without permanent links enabled, <c>recording_url</c> holds a temporary pre-signed URL
    /// instead; to fetch a recording after it expires, use calls_recording.
    /// </para>
    /// </remarks>
    public Task RecordingsShow(RecordingsShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/recordings/{user_id}/{token}"),
            [new TemplateParam("user_id", request.UserId), new TemplateParam("token", request.Token)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RecordingsShowError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
