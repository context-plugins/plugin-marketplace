"""The seams every endpoint crosses: build a request, send it, shape a result.

Pagination does not live here. ``pagination.paginate`` and ``async_paginate`` run that loop, calling the
endpoint's ``execute`` once per page.

The twins live in one module so the few ``await``s they differ by stay visible on one screen."""

from __future__ import annotations

import asyncio
import time
from collections.abc import Awaitable, Callable, Sequence
from dataclasses import dataclass
from datetime import datetime, timezone
from typing import Any, Generic, TypeVar

from ._internal.headers import resolve_headers
from ._internal.urls import build_url, resolve_params, safe_url
from .auth import AnySchemesError, AsyncAuthScheme, AuthParams, AuthScheme, invalidate, no_auth, resolve_auth
from .bodies import RequestBody, content_headers
from .decoding import AsyncResponseDecoder, ErrorMapper, ResponseDecoder
from .exceptions import AuthSchemeError, ResponseDecodeError, SdkConnectionError
from .hooks import (
    AsyncHookContext,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    HookContext,
    SdkHook,
    SdkHooksDict,
    _async_coerce_hooks,
    _coerce_hooks,
)
from .logging import HttpLog, LoggingOptions
from .params import Param, UrlTemplate
from .request_options import (
    AsyncRequestOptions,
    AsyncRequestOptionsOrDict,
    BaseRequestOptions,
    RequestOptions,
    RequestOptionsOrDict,
    apply_retry_overrides,
)
from .results import ApiResult, Failure, Success
from .retries import RetryOptions, backoff_seconds, is_retryable_body, retry_after_seconds
from .transport import (
    AsyncHttpClient,
    AsyncHttpResponse,
    HttpClient,
    HttpMethod,
    HttpRequest,
    HttpResponse,
)

T = TypeVar("T")
E = TypeVar("E")
TransportT = TypeVar("TransportT", bound=HttpClient | AsyncHttpClient)


@dataclass(frozen=True, slots=True)
class BaseRawClient(Generic[TransportT]):
    """Shared state for the raw clients, and the one place a request is composed of it.

    The type parameter pins the one transport a flavor can use, so :class:`RawClient` is provably
    sync and :class:`AsyncRawClient` provably async. The ``global_*`` fields are spec-derived -- the
    generator writes them, an API declaring none leaves them empty -- and each is combined with a
    call's own parameters by the matching ``resolve_*`` function, so this class decides nothing
    about precedence. For headers and query parameters alike that order is::

        global_*  ->  the endpoint's own  ->  auth  ->  the caller's extra_headers

    Auth outranks the endpoint so an operation parameter cannot clobber a credential, and loses to
    ``extra_headers`` because that is how a caller deliberately overrides one. ``_build_request`` takes
    the scheme already resolved, as :class:`~.auth.AuthParams`, because resolving it may await; it
    never sends and never logs."""

    http_client: TransportT

    retry_options: RetryOptions

    logging_options: LoggingOptions

    global_headers: Sequence[Param[Any]] = ()
    global_query_params: Sequence[Param[Any]] = ()
    global_path_params: Sequence[Param[Any]] = ()

    def _build_request(
        self,
        *,
        http_method: HttpMethod,
        url_template: UrlTemplate,
        path_params: Sequence[Param[Any]] | None,
        query_params: Sequence[Param[Any]] | None,
        headers: Sequence[Param[Any]] | None,
        body: RequestBody | None,
        auth: AuthParams,
        options: BaseRequestOptions,
    ) -> HttpRequest:
        """Resolve the API-wide, endpoint, auth and caller layers into one request, the body's own
        label beneath them all."""
        return HttpRequest(
            method=http_method,
            url=build_url(
                url_template,
                path_params=resolve_params(self.global_path_params, path_params),
                query_params=resolve_params(self.global_query_params, (*(query_params or ()), *auth.query_params)),
            ),
            headers={
                **content_headers(body),
                **resolve_headers(
                    self.global_headers,
                    (*(headers or ()), *auth.request_headers()),
                    extra_headers=options.extra_headers,
                ),
            },
            body=body,
            timeout=options.timeout,
        )


@dataclass(frozen=True, slots=True)
class RawClient(BaseRawClient[HttpClient]):
    """Synchronous raw client: builds the request, sends it, shapes the result."""

    hooks: Sequence[SdkHook] | SdkHooksDict = ()
    """The client's hooks, run on every attempt of every call -- before the call's own: hook objects, or plain
    functions keyed by event. Resolved into hooks by ``execute``, once per call."""

    def execute(
        self,
        *,
        http_method: HttpMethod,
        url_template: UrlTemplate,
        path_params: Sequence[Param[Any]] | None = None,
        query_params: Sequence[Param[Any]] | None = None,
        headers: Sequence[Param[Any]] | None = None,
        body: RequestBody | None = None,
        auth_scheme: AuthScheme = no_auth,
        decoder: ResponseDecoder[T],
        error_mapper: ErrorMapper[E],
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[T, E]:
        """Send a request and shape the response into a result.

        Returns once the response head has arrived; the body is the ``decoder``'s from there -- a
        buffered one reads and releases it, ``file_decoder`` hands the open connection to the
        :class:`FileResponse` it builds -- and ``T`` is solved from that argument. A non-2xx body is
        read and the connection released *before* the mapper runs, so a :class:`Failure` never holds
        a connection, even when the mapper raises.

        Args:
            http_method: The HTTP verb to send.
            url_template: The unresolved URL for the configured environment.
            path_params: The endpoint's path parameters, if any.
            query_params: The endpoint's query parameters, if any.
            headers: The endpoint's header parameters, if any.
            body: The request body, already wire-ready, or ``None``.
            auth_scheme: The scheme the operation declares; ``no_auth`` when it declares none.
            decoder: The operation's 2xx decoder; ``empty_response`` when it declares no-body.
            error_mapper: The operation's error mapper; ``raw_error_response`` when it declares none.
            request_options: The caller's per-call overrides, if any.

        Returns:
            A :class:`Success` carrying the decoded payload for a 2xx status, otherwise a
            :class:`Failure` carrying the decoded error body; each names the call it answers.

        Raises:
            AuthSchemeError: If the operation's scheme could not supply its credential -- the token
                endpoint refused or could not be reached, or a caller's own scheme raised; that failure
                is the cause. For an OR requirement, every configured alternative raised: each failure is
                in ``scheme_failures``, in order, and the group's ``AnySchemesError`` is the cause.
            SdkConnectionError: If the last attempt produced no response, or the body failed after the
                head arrived -- its leaf ``SdkTimeoutError`` where the window ran out. Raised by the
                transport itself, naming the call; the library's own exception is the cause. A hook's
                ``before_request`` may raise one too, to have its attempt retried as a failed send; raised
                from ``after_response`` it ends the call unretried.
            ResponseDecodeError: If a 2xx body, or a documented error body, is rejected by its declared
                type; the decoder's own exception is the cause. Not an API error, so it propagates in
                both response modes.
            Exception: Anything else as it was raised -- a scheme's, a caller's decoder's, a log
                handler's, a hook's."""
        options = RequestOptions.coerce(request_options)
        retry_options = apply_retry_overrides(options, self.retry_options)
        # The call's URL, rendered once before auth: the template with its path and query parameters, the API-wide
        # ones folded in -- what the hooks are told. Every result and exception carries its safe form, cut to the
        # path -- no query, no userinfo -- so nothing a parameter places in a query reaches a message. send()
        # renders the full URL again per attempt, auth's query params included.
        url = build_url(
            url_template,
            path_params=resolve_params(self.global_path_params, path_params),
            query_params=resolve_params(self.global_query_params, query_params),
        )
        call_url = safe_url(url)
        log = HttpLog(
            options=self.logging_options, log_level_override=options.log_level, started_at=time.perf_counter()
        )
        # The client's hooks, then the call's -- appended, never substituted. Both are this flavour's own hook type:
        # RequestOptions is the synchronous twin. Each is resolved here, a dict of functions into one hook each.
        # One context per call, shared by every attempt and every hook.
        hooks = (*_coerce_hooks(self.hooks), *_coerce_hooks(options.hooks))
        hook_context = HookContext(method=http_method, url=url, request_options=options)

        def send() -> HttpResponse:
            try:
                auth = auth_scheme.apply()
            except Exception as error:
                # A token endpoint down or refusing, a caller's scheme raising, or every OR alternative failing.
                raise AuthSchemeError(
                    f"{http_method} {call_url} could not be authenticated: {error}",
                    method=http_method,
                    url=call_url,
                    scheme_failures=error.scheme_failures if isinstance(error, AnySchemesError) else (error,),
                ) from error
            request = self._build_request(
                http_method=http_method,
                url_template=url_template,
                path_params=path_params,
                query_params=query_params,
                headers=headers,
                body=body,
                auth=auth,
                options=options,
            )
            # After auth and before the log line, so the request line shows what a hook changed. A hook that
            # raises leaves before anything was reported, so ``failed`` writes nothing for it.
            for hook in hooks:
                request = hook.before_request(request, hook_context)
            log.request_sending(request)
            return self.http_client.send(request)

        try:
            response = self._attempt_send(
                auth_scheme=auth_scheme,
                retry_options=retry_options,
                is_retryable=is_retryable_body(body) and http_method in retry_options.http_methods_to_retry,
                send=send,
                log=log,
                hooks=hooks,
                hook_context=hook_context,
            )
        except SdkConnectionError as error:
            # No response on the last attempt. Logged as the library's exception on ``__cause__``, which may be None
            # where custom transport chained nothing, so the error itself stands in.
            log.failed(error.__cause__ or error)
            raise
        except Exception as error:
            # Auth failing, a param rejected by its type, an upload that won't open, or a custom transport or log
            # handler raising; ``failed`` is a no-op before the first request. Cancellation isn't caught.
            log.failed(error)
            raise

        # Bound before the try, so every arm below may name them; the loop has already read both once.
        status_code, response_headers = response.status_code, dict(response.headers)
        try:
            if 200 <= status_code < 300:
                # Returns before the read: the body is the decoder's now. The excepts below must never
                # become a finally -- they would close the connection a FileResponse was just handed.
                return Success(
                    payload=decoder.decode(response),
                    status_code=status_code,
                    headers=response_headers,
                    method=http_method,
                    url=call_url,
                )

            content = response.read()
            response.close()
            # Mapped after the close, so a mapper raise cannot leak a connection; the second close it
            # causes is a no-op, since close is required to be idempotent.
            return Failure(
                error=error_mapper.map(status_code, content),
                status_code=status_code,
                headers=response_headers,
                method=http_method,
                url=call_url,
            )
        except SdkConnectionError as error:
            # The body read failed after the head: dropped mid-body, timed out, or bad encoding. Logged as its cause.
            response.close()
            log.failed(error.__cause__ or error)
            raise
        except ValueError as error:
            # Only the decoder and the mapper raise it here -- parse_json's ValueError, pydantic's ValidationError,
            # _decode_utf8's UnicodeDecodeError -- since transport's read raises SdkConnectionError by obligation.
            # Not logged: only a body read that failed writes the failed line.
            response.close()
            raise ResponseDecodeError(
                method=http_method, url=call_url, status_code=status_code, headers=response_headers
            ) from error
        except BaseException:
            # A decoder or mapper raising anything else, custom transport's read raising its own error, or the
            # caller's cancellation or interrupt: closed, and not logged.
            response.close()
            raise

    @staticmethod
    def _attempt_send(
        *,
        auth_scheme: AuthScheme,
        retry_options: RetryOptions,
        is_retryable: bool,
        send: Callable[[], HttpResponse],
        log: HttpLog,
        hooks: Sequence[SdkHook],
        hook_context: HookContext,
    ) -> HttpResponse:
        """Send, and send again while every gate agrees; hand back the attempt that was kept.

        ``send`` is called once per attempt: it builds the request -- resolving auth afresh, so a
        credential a 401 invalidated is re-obtained rather than resent -- reports it to ``log`` and
        sends it. Each head is reported to ``log`` as it arrives, with whether it is a success by the
        same 2xx rule ``execute`` shapes the result by, so the scope holds no status rule of its own;
        the hooks see each response after it is reported and after the 401 check, and the one the last hook
        returns is the one the gate reads and the one handed back. If that report, the 401
        invalidation or a hook after them raises -- a log handler, the caller's scheme or a hook --
        the response is closed before the exception leaves. The retry line is written after
        the discarded response is closed and before the wait, so nothing a log handler does there can
        hold a connection. A 401 invalidates the scheme's cache per attempt but is not retried under
        the shipped defaults.

        Args:
            auth_scheme: The scheme this operation declares; invalidated where the server answers 401.
            retry_options: The policy in force for this call, per-call terms already merged.
            is_retryable: Whether this request may be repeated at all -- the method gate and the
                body's replayability, folded once per call since neither changes between attempts.
            send: Builds, reports and sends one attempt's request.
            log: The call's log scope.
            hooks: The call's hooks, the client's first; each is handed every attempt's response as the previous
                one returned it, and returns the one the next receives.
            hook_context: The call they are told about.

        Returns:
            The kept attempt's response as the hooks returned it, open.

        Raises:
            SdkConnectionError: The transport's own, from the last attempt, once every gate has refused;
                it names the call already, so ``execute`` logs it and lets it pass."""
        for retries_taken in range(retry_options.max_retries + 1):
            try:
                response = send()
            except SdkConnectionError as error:
                # No response arrived, so there is nothing to close. The one shape transport owes for a failed
                # send, whichever library moved the bytes, and a timeout is its leaf, so the same gates read it.
                # Once they refuse, the exception leaves as it is: it names the call, and ``execute`` logs it.
                if retries_taken >= retry_options.max_retries or not is_retryable:
                    raise
                wait_seconds = backoff_seconds(retries_taken, retry_options)
                # ``__cause__`` may be None where a custom transport chained nothing.
                log.retrying(max_retries=retry_options.max_retries, delay=wait_seconds, reason=error.__cause__ or error)
                time.sleep(wait_seconds)
                continue

            status_code = response.status_code

            # The calls here run code the SDK does not own -- a log handler, the caller's scheme, the caller's
            # hooks -- while the response is open; one that raises must not leave the connection held. The hooks
            # run after the response line and the 401 check, on every attempt, so a hook that raises cannot keep a
            # stale credential cached. The line and the check read the transport's response: what the server sent.
            try:
                log.response_received(status_code, dict(response.headers), is_success=200 <= status_code < 300)
                if status_code == 401:
                    invalidate(auth_scheme)
                for hook in hooks:
                    response = hook.after_response(response, hook_context)
            except BaseException:
                # The latest response: a hook that replaced the transport's owns the one it was handed.
                response.close()
                raise

            # From here on, the response the hooks handed back: the gate, Retry-After and the result read it.
            status_code, response_headers = response.status_code, dict(response.headers)

            if not (
                is_retryable
                and status_code in retry_options.status_codes_to_retry
                and retries_taken < retry_options.max_retries
            ):
                return response

            retry_after_header = retry_after_seconds(response_headers, datetime.now(timezone.utc))
            wait_seconds = (
                backoff_seconds(retries_taken, retry_options)
                if retry_after_header is None
                else min(retry_after_header, retry_options.max_delay)
            )

            # Closed before the retry line and the wait, so neither can hold a connection.
            response.close()
            log.retrying(max_retries=retry_options.max_retries, delay=wait_seconds, reason=status_code)
            time.sleep(wait_seconds)

        raise AssertionError("the retry loop ended without a response to shape")


@dataclass(frozen=True, slots=True)
class AsyncRawClient(BaseRawClient[AsyncHttpClient]):
    """Asynchronous raw client.

    The method is named ``execute``, not ``execute_async``: sync and async peers
    carry identical names throughout this SDK, and the transport already makes the
    flavor unambiguous."""

    hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict = ()
    """The client's hooks, run on every attempt of every call -- before the call's own: hook objects, or coroutine
    functions keyed by event. Each is awaited. Resolved into hooks by ``execute``, once per call."""

    async def execute(
        self,
        *,
        http_method: HttpMethod,
        url_template: UrlTemplate,
        path_params: Sequence[Param[Any]] | None = None,
        query_params: Sequence[Param[Any]] | None = None,
        headers: Sequence[Param[Any]] | None = None,
        body: RequestBody | None = None,
        auth_scheme: AsyncAuthScheme = no_auth,
        decoder: AsyncResponseDecoder[T],
        error_mapper: ErrorMapper[E],
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[T, E]:
        """Send a request and shape the response into a result.

        Returns once the response head has arrived; the body is the ``decoder``'s from there -- a
        buffered one reads and releases it, ``file_decoder`` hands the open connection to the
        :class:`FileResponse` it builds -- and ``T`` is solved from that argument. A non-2xx body is
        read and the connection released *before* the mapper runs, so a :class:`Failure` never holds
        a connection, even when the mapper raises.

        Args:
            http_method: The HTTP verb to send.
            url_template: The unresolved URL for the configured environment.
            path_params: The endpoint's path parameters, if any.
            query_params: The endpoint's query parameters, if any.
            headers: The endpoint's header parameters, if any.
            body: The request body, already wire-ready, or ``None``.
            auth_scheme: The scheme the operation declares; ``no_auth`` when it declares none.
            decoder: The operation's 2xx decoder; ``empty_response`` when it declares no-body.
            error_mapper: The operation's error mapper; ``raw_error_response`` when it declares none.
            request_options: The caller's per-call overrides, if any.

        Returns:
            A :class:`Success` carrying the decoded payload for a 2xx status, otherwise a
            :class:`Failure` carrying the decoded error body; each names the call it answers.

        Raises:
            AuthSchemeError: If the operation's scheme could not supply its credential -- the token
                endpoint refused or could not be reached, or a caller's own scheme raised; that failure
                is the cause. For an OR requirement, every configured alternative raised: each failure is
                in ``scheme_failures``, in order, and the group's ``AnySchemesError`` is the cause.
            SdkConnectionError: If the last attempt produced no response, or the body failed after the
                head arrived -- its leaf ``SdkTimeoutError`` where the window ran out. Raised by the
                transport itself, naming the call; the library's own exception is the cause. A hook's
                ``before_request`` may raise one too, to have its attempt retried as a failed send; raised
                from ``after_response`` it ends the call unretried.
            ResponseDecodeError: If a 2xx body, or a documented error body, is rejected by its declared
                type; the decoder's own exception is the cause. Not an API error, so it propagates in
                both response modes.
            Exception: Anything else as it was raised -- a scheme's, a caller's decoder's, a log
                handler's, a hook's."""
        options = AsyncRequestOptions.coerce(request_options)
        retry_options = apply_retry_overrides(options, self.retry_options)
        # The call's URL, rendered once before auth: the template with its path and query parameters, the API-wide
        # ones folded in -- what the hooks are told. Every result and exception carries its safe form, cut to the
        # path -- no query, no userinfo -- so nothing a parameter places in a query reaches a message. send()
        # renders the full URL again per attempt, auth's query params included.
        url = build_url(
            url_template,
            path_params=resolve_params(self.global_path_params, path_params),
            query_params=resolve_params(self.global_query_params, query_params),
        )
        call_url = safe_url(url)
        log = HttpLog(
            options=self.logging_options, log_level_override=options.log_level, started_at=time.perf_counter()
        )
        # The client's hooks, then the call's -- appended, never substituted. Both are this flavour's own hook type:
        # AsyncRequestOptions is the asynchronous twin. Each is resolved here, a dict of functions into one hook each.
        # One context per call, shared by every attempt and every hook.
        hooks = (*_async_coerce_hooks(self.hooks), *_async_coerce_hooks(options.hooks))
        hook_context = AsyncHookContext(method=http_method, url=url, request_options=options)

        async def send() -> AsyncHttpResponse:
            try:
                auth = await resolve_auth(auth_scheme)
            except Exception as error:
                # A token endpoint down or refusing, a caller's scheme raising, or every OR alternative failing.
                raise AuthSchemeError(
                    f"{http_method} {call_url} could not be authenticated: {error}",
                    method=http_method,
                    url=call_url,
                    scheme_failures=error.scheme_failures if isinstance(error, AnySchemesError) else (error,),
                ) from error
            request = self._build_request(
                http_method=http_method,
                url_template=url_template,
                path_params=path_params,
                query_params=query_params,
                headers=headers,
                body=body,
                auth=auth,
                options=options,
            )
            # After auth and before the log line, so the request line shows what a hook changed. A hook that
            # raises leaves before anything was reported, so ``failed`` writes nothing for it.
            for hook in hooks:
                request = await hook.before_request(request, hook_context)
            log.request_sending(request)
            return await self.http_client.send(request)

        try:
            response = await self._attempt_send(
                auth_scheme=auth_scheme,
                retry_options=retry_options,
                is_retryable=is_retryable_body(body) and http_method in retry_options.http_methods_to_retry,
                send=send,
                log=log,
                hooks=hooks,
                hook_context=hook_context,
            )
        except SdkConnectionError as error:
            # No response on the last attempt. Logged as the library's exception on ``__cause__``, which may be None
            # where custom transport chained nothing, so the error itself stands in.
            log.failed(error.__cause__ or error)
            raise
        except Exception as error:
            # Auth failing, a param rejected by its type, an upload that won't open, or a custom transport or log
            # handler raising; ``failed`` is a no-op before the first request. Cancellation isn't caught.
            log.failed(error)
            raise

        # Bound before the try, so every arm below may name them; the loop has already read both once.
        status_code, response_headers = response.status_code, dict(response.headers)
        try:
            if 200 <= status_code < 300:
                # Returns before the read: the body is the decoder's now. The excepts below must never
                # become a finally -- they would close the connection an AsyncFileResponse was just handed.
                return Success(
                    payload=await decoder.decode(response),
                    status_code=status_code,
                    headers=response_headers,
                    method=http_method,
                    url=call_url,
                )

            content = await response.aread()
            await response.aclose()
            # Mapped after the close, so a mapper raise cannot leak a connection; the second close it
            # causes is a no-op, since aclose is required to be idempotent.
            return Failure(
                error=error_mapper.map(status_code, content),
                status_code=status_code,
                headers=response_headers,
                method=http_method,
                url=call_url,
            )
        except SdkConnectionError as error:
            # The body read failed after the head: dropped mid-body, timed out, or bad encoding. Logged as its cause.
            await response.aclose()
            log.failed(error.__cause__ or error)
            raise
        except ValueError as error:
            # Only the decoder and the mapper raise it here -- parse_json's ValueError, pydantic's ValidationError,
            # _decode_utf8's UnicodeDecodeError -- since transport's read raises SdkConnectionError by obligation.
            # Not logged: only a body read that failed writes the failed line.
            await response.aclose()
            raise ResponseDecodeError(
                method=http_method, url=call_url, status_code=status_code, headers=response_headers
            ) from error
        except BaseException:
            # A decoder or mapper raising anything else, custom transport's read raising its own error, or the
            # caller's cancellation or interrupt: closed, and not logged.
            await response.aclose()
            raise

    @staticmethod
    async def _attempt_send(
        *,
        auth_scheme: AsyncAuthScheme,
        retry_options: RetryOptions,
        is_retryable: bool,
        send: Callable[[], Awaitable[AsyncHttpResponse]],
        log: HttpLog,
        hooks: Sequence[AsyncSdkHook],
        hook_context: AsyncHookContext,
    ) -> AsyncHttpResponse:
        """The awaited twin of :meth:`RawClient._attempt_send`, with that contract exactly.

        Four things differ: ``send`` is awaited, the close is ``aclose``, the wait is
        ``asyncio.sleep``, so it yields the event loop instead of blocking it, and a hook's
        ``after_response`` is awaited."""
        for retries_taken in range(retry_options.max_retries + 1):
            try:
                response = await send()
            except SdkConnectionError as error:
                # No response arrived, so there is nothing to close. The one shape transport owes for a failed
                # send, whichever library moved the bytes, and a timeout is its leaf, so the same gates read it.
                # Once they refuse, the exception leaves as it is: it names the call, and ``execute`` logs it.
                if retries_taken >= retry_options.max_retries or not is_retryable:
                    raise
                wait_seconds = backoff_seconds(retries_taken, retry_options)
                # ``__cause__`` may be None where a custom transport chained nothing.
                log.retrying(max_retries=retry_options.max_retries, delay=wait_seconds, reason=error.__cause__ or error)
                await asyncio.sleep(wait_seconds)
                continue

            status_code = response.status_code

            # The calls here run code the SDK does not own -- a log handler, the caller's scheme, the caller's
            # hooks -- while the response is open; one that raises must not leave the connection held. The hooks
            # run after the response line and the 401 check, on every attempt, so a hook that raises cannot keep a
            # stale credential cached. The line and the check read the transport's response: what the server sent.
            try:
                log.response_received(status_code, dict(response.headers), is_success=200 <= status_code < 300)
                if status_code == 401:
                    invalidate(auth_scheme)
                for hook in hooks:
                    response = await hook.after_response(response, hook_context)
            except BaseException:
                # The latest response: a hook that replaced the transport's owns the one it was handed.
                await response.aclose()
                raise

            # From here on, the response the hooks handed back: the gate, Retry-After and the result read it.
            status_code, response_headers = response.status_code, dict(response.headers)

            if not (
                is_retryable
                and status_code in retry_options.status_codes_to_retry
                and retries_taken < retry_options.max_retries
            ):
                return response

            retry_after_header = retry_after_seconds(response_headers, datetime.now(timezone.utc))
            wait_seconds = (
                backoff_seconds(retries_taken, retry_options)
                if retry_after_header is None
                else min(retry_after_header, retry_options.max_delay)
            )

            # Closed before the retry line and the wait, so neither can hold a connection.
            await response.aclose()
            log.retrying(max_retries=retry_options.max_retries, delay=wait_seconds, reason=status_code)
            await asyncio.sleep(wait_seconds)

        raise AssertionError("the retry loop ended without a response to shape")


RawClientT = TypeVar("RawClientT", bound=RawClient | AsyncRawClient)
"""Fixes which raw client a generic holder carries -- ``RawClient`` or ``AsyncRawClient``.

Bounded by the two concrete clients, not ``BaseRawClient[Any]``: the base has no ``execute``, so the
looser bound could not prove a holder's ``self._client.execute(...)`` exists."""
