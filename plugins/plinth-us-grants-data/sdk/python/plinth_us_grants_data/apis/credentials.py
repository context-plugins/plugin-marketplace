from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.answer_challenge_error import AnswerChallengeErrorBody, answer_challenge_error_mapper
from ..errors.mint_agent_key_error import MintAgentKeyErrorBody, mint_agent_key_error_mapper
from ..errors.take_challenge_error import TakeChallengeErrorBody, take_challenge_error_mapper
from ..models.agent_key_request import AgentKeyRequest, AgentKeyRequestDict
from ..models.answer_request import AnswerRequest, AnswerRequestDict
from ..models.challenge_issued import ChallengeIssued
from ..models.trial_key import TrialKey
from ..models.unlock_result import UnlockResult
from ..server.server import Server


class Credentials:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CredentialsWithRawResponse(client, server)

    def answer_challenge(
        self, body: AnswerRequest | AnswerRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> UnlockResult:
        """Send the values of the fields the questions named. We re-read those calls to check, so nothing is stored at
        issue time and nothing can drift from the data it described.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Unlocked, with the general call budget added.

        Raises:
            ApiError: Wrong answers, or the wrong number of them. Which one was wrong is deliberately not said. The last
                attempt on a challenge REPLACES it: ``error: challenge_replaced``, with fresh questions in the same
                body. No key, or not a live trial key. That key has no challenge outstanding. Too soon after a wrong
                answer. ``Retry-After`` and ``retry_after_seconds`` say how long; the attempt was neither counted nor
                checked. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.answer_challenge(body, request_options=request_options))

    def describe_agent_key(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Returns the signing requirements, the tier ladder and a worked example request. No key, no account, no
        signature needed to read this.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            How to get a key: the keyless challenge route, the signing alternative, and the tier ladder.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_agent_key(request_options=request_options))

    def describe_challenge(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Readable without a key, so an agent that arrives here learns the shape rather than meeting a 401.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The loop, in order.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_challenge(request_options=request_options))

    def mint_agent_key(
        self,
        body: AgentKeyRequest | AgentKeyRequestDict,
        *,
        signature_agent: str | None = None,
        signature_input: str | None = None,
        signature: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TrialKey:
        """Mints a short-lived, read-only evaluation key. No account, no card, no browser, and nothing created in anyone
        else's name.

        **The ordinary route needs no credential of any kind.** POST here with ``purpose`` and ``source`` and you get a
        key immediately — but LOCKED: it may make only the calls its challenge names. Make them, read the fields the
        questions ask about, POST those values to ``/api/v1/agent-key/answer``, and the key unlocks for general use.
        When that budget is spent, take another challenge. As often as you like, free.

        Every fiscal year in the corpus is readable; what is small is the row cap and the per-challenge budget, both
        announced in ``x_plinth.warnings`` at ``caveat`` severity.

        **Signing is the alternative, not the requirement.** A caller that can publish an Ed25519 key directory and sign
        per RFC 9421 (Web Bot Auth profile: cover ``@authority`` and ``signature-agent``, tag ``web-bot-auth``, with
        ``created``, ``expires``, a ``nonce`` and a ``keyid`` that is the base64url JWK SHA-256 thumbprint) is issued at
        a higher tier with a larger budget and no challenges. That allowance IS a total and never refills. GET this path
        for the full ladder.

        Args:
            body: The request body.
            signature_agent: The https origin publishing your key directory, as a structured-field string:
                "https://your-host.example".
            signature_input: RFC 9421 covered components and parameters, e.g. sig=("@authority"
                "signature-agent");created=…;expires=…;keyid="…";alg="ed25519";nonce="…";tag="web-bot-auth"
            signature: sig=:<base64 ed25519 signature>: Send all three signature headers or none.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A trial key, its expiry, its budget, and the challenge it arrives locked to.

        Raises:
            ApiError: ``purpose`` or ``source`` missing or too short. A signature was presented and did not verify, or
                was replayed. The body says which. This signature-agent host has minted its allowance of trial keys
                today. Your key directory could not be read — your signature may be fine. Trial keys are at capacity;
                get a free key with an account instead. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.mint_agent_key(
                body,
                signature_agent=signature_agent,
                signature_input=signature_input,
                signature=signature,
                request_options=request_options,
            ),
        )

    def take_challenge(self, *, request_options: RequestOptionsOrDict | None = None) -> ChallengeIssued:
        """A trial key whose grant is spent asks for three new calls, is locked to them, answers, and is unlocked again
        — as often as needed. Replacing an outstanding challenge is allowed; it grants extra calls only if the previous
        questions turned out to be unanswerable from our side too.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Three calls this key may now make, and where to answer.

        Raises:
            ApiError: No key, or not a live trial key. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.take_challenge(request_options=request_options))

    @property
    def with_raw_response(self) -> CredentialsWithRawResponse:
        return self._with_raw_response


class AsyncCredentials:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCredentialsWithRawResponse(client, server)

    async def answer_challenge(
        self, body: AnswerRequest | AnswerRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UnlockResult:
        """Send the values of the fields the questions named. We re-read those calls to check, so nothing is stored at
        issue time and nothing can drift from the data it described.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Unlocked, with the general call budget added.

        Raises:
            ApiError: Wrong answers, or the wrong number of them. Which one was wrong is deliberately not said. The last
                attempt on a challenge REPLACES it: ``error: challenge_replaced``, with fresh questions in the same
                body. No key, or not a live trial key. That key has no challenge outstanding. Too soon after a wrong
                answer. ``Retry-After`` and ``retry_after_seconds`` say how long; the attempt was neither counted nor
                checked. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.answer_challenge(body, request_options=request_options))

    async def describe_agent_key(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Returns the signing requirements, the tier ladder and a worked example request. No key, no account, no
        signature needed to read this.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            How to get a key: the keyless challenge route, the signing alternative, and the tier ladder.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_agent_key(request_options=request_options))

    async def describe_challenge(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Readable without a key, so an agent that arrives here learns the shape rather than meeting a 401.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The loop, in order.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_challenge(request_options=request_options))

    async def mint_agent_key(
        self,
        body: AgentKeyRequest | AgentKeyRequestDict,
        *,
        signature_agent: str | None = None,
        signature_input: str | None = None,
        signature: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TrialKey:
        """Mints a short-lived, read-only evaluation key. No account, no card, no browser, and nothing created in anyone
        else's name.

        **The ordinary route needs no credential of any kind.** POST here with ``purpose`` and ``source`` and you get a
        key immediately — but LOCKED: it may make only the calls its challenge names. Make them, read the fields the
        questions ask about, POST those values to ``/api/v1/agent-key/answer``, and the key unlocks for general use.
        When that budget is spent, take another challenge. As often as you like, free.

        Every fiscal year in the corpus is readable; what is small is the row cap and the per-challenge budget, both
        announced in ``x_plinth.warnings`` at ``caveat`` severity.

        **Signing is the alternative, not the requirement.** A caller that can publish an Ed25519 key directory and sign
        per RFC 9421 (Web Bot Auth profile: cover ``@authority`` and ``signature-agent``, tag ``web-bot-auth``, with
        ``created``, ``expires``, a ``nonce`` and a ``keyid`` that is the base64url JWK SHA-256 thumbprint) is issued at
        a higher tier with a larger budget and no challenges. That allowance IS a total and never refills. GET this path
        for the full ladder.

        Args:
            body: The request body.
            signature_agent: The https origin publishing your key directory, as a structured-field string:
                "https://your-host.example".
            signature_input: RFC 9421 covered components and parameters, e.g. sig=("@authority"
                "signature-agent");created=…;expires=…;keyid="…";alg="ed25519";nonce="…";tag="web-bot-auth"
            signature: sig=:<base64 ed25519 signature>: Send all three signature headers or none.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A trial key, its expiry, its budget, and the challenge it arrives locked to.

        Raises:
            ApiError: ``purpose`` or ``source`` missing or too short. A signature was presented and did not verify, or
                was replayed. The body says which. This signature-agent host has minted its allowance of trial keys
                today. Your key directory could not be read — your signature may be fine. Trial keys are at capacity;
                get a free key with an account instead. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.mint_agent_key(
                body,
                signature_agent=signature_agent,
                signature_input=signature_input,
                signature=signature,
                request_options=request_options,
            ),
        )

    async def take_challenge(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ChallengeIssued:
        """A trial key whose grant is spent asks for three new calls, is locked to them, answers, and is unlocked again
        — as often as needed. Replacing an outstanding challenge is allowed; it grants extra calls only if the previous
        questions turned out to be unanswerable from our side too.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Three calls this key may now make, and where to answer.

        Raises:
            ApiError: No key, or not a live trial key. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.take_challenge(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCredentialsWithRawResponse:
        return self._with_raw_response


class CredentialsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def answer_challenge(
        self, body: AnswerRequest | AnswerRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UnlockResult, AnswerChallengeErrorBody]:
        """Send the values of the fields the questions named. We re-read those calls to check, so nothing is stored at
        issue time and nothing can drift from the data it described.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/agent-key/answer"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AnswerRequest | AnswerRequestDict](body),
            decoder=json_decoder[UnlockResult],
            error_mapper=answer_challenge_error_mapper,
            request_options=request_options,
        )

    def describe_agent_key(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]:
        """Returns the signing requirements, the tier ladder and a worked example request. No key, no account, no
        signature needed to read this.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/agent-key"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def describe_challenge(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]:
        """Readable without a key, so an agent that arrives here learns the shape rather than meeting a 401.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/agent-key/challenge"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def mint_agent_key(
        self,
        body: AgentKeyRequest | AgentKeyRequestDict,
        *,
        signature_agent: str | None = None,
        signature_input: str | None = None,
        signature: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TrialKey, MintAgentKeyErrorBody]:
        """Mints a short-lived, read-only evaluation key. No account, no card, no browser, and nothing created in anyone
        else's name.

        **The ordinary route needs no credential of any kind.** POST here with ``purpose`` and ``source`` and you get a
        key immediately — but LOCKED: it may make only the calls its challenge names. Make them, read the fields the
        questions ask about, POST those values to ``/api/v1/agent-key/answer``, and the key unlocks for general use.
        When that budget is spent, take another challenge. As often as you like, free.

        Every fiscal year in the corpus is readable; what is small is the row cap and the per-challenge budget, both
        announced in ``x_plinth.warnings`` at ``caveat`` severity.

        **Signing is the alternative, not the requirement.** A caller that can publish an Ed25519 key directory and sign
        per RFC 9421 (Web Bot Auth profile: cover ``@authority`` and ``signature-agent``, tag ``web-bot-auth``, with
        ``created``, ``expires``, a ``nonce`` and a ``keyid`` that is the base64url JWK SHA-256 thumbprint) is issued at
        a higher tier with a larger budget and no challenges. That allowance IS a total and never refills. GET this path
        for the full ladder.

        Args:
            body: The request body.
            signature_agent: The https origin publishing your key directory, as a structured-field string:
                "https://your-host.example".
            signature_input: RFC 9421 covered components and parameters, e.g. sig=("@authority"
                "signature-agent");created=…;expires=…;keyid="…";alg="ed25519";nonce="…";tag="web-bot-auth"
            signature: sig=:<base64 ed25519 signature>: Send all three signature headers or none.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/agent-key"),
            headers=[
                param[str | None]("Signature-Agent", signature_agent),
                param[str | None]("Signature-Input", signature_input),
                param[str | None]("Signature", signature),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[AgentKeyRequest | AgentKeyRequestDict](body),
            decoder=json_decoder[TrialKey],
            error_mapper=mint_agent_key_error_mapper,
            request_options=request_options,
        )

    def take_challenge(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ChallengeIssued, TakeChallengeErrorBody]:
        """A trial key whose grant is spent asks for three new calls, is locked to them, answers, and is unlocked again
        — as often as needed. Replacing an outstanding challenge is allowed; it grants extra calls only if the previous
        questions turned out to be unanswerable from our side too.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/agent-key/challenge"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[ChallengeIssued],
            error_mapper=take_challenge_error_mapper,
            request_options=request_options,
        )


class AsyncCredentialsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def answer_challenge(
        self, body: AnswerRequest | AnswerRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UnlockResult, AnswerChallengeErrorBody]:
        """Send the values of the fields the questions named. We re-read those calls to check, so nothing is stored at
        issue time and nothing can drift from the data it described.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/agent-key/answer"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AnswerRequest | AnswerRequestDict](body),
            decoder=async_json_decoder[UnlockResult],
            error_mapper=answer_challenge_error_mapper,
            request_options=request_options,
        )

    async def describe_agent_key(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Returns the signing requirements, the tier ladder and a worked example request. No key, no account, no
        signature needed to read this.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/agent-key"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def describe_challenge(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Readable without a key, so an agent that arrives here learns the shape rather than meeting a 401.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/agent-key/challenge"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def mint_agent_key(
        self,
        body: AgentKeyRequest | AgentKeyRequestDict,
        *,
        signature_agent: str | None = None,
        signature_input: str | None = None,
        signature: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TrialKey, MintAgentKeyErrorBody]:
        """Mints a short-lived, read-only evaluation key. No account, no card, no browser, and nothing created in anyone
        else's name.

        **The ordinary route needs no credential of any kind.** POST here with ``purpose`` and ``source`` and you get a
        key immediately — but LOCKED: it may make only the calls its challenge names. Make them, read the fields the
        questions ask about, POST those values to ``/api/v1/agent-key/answer``, and the key unlocks for general use.
        When that budget is spent, take another challenge. As often as you like, free.

        Every fiscal year in the corpus is readable; what is small is the row cap and the per-challenge budget, both
        announced in ``x_plinth.warnings`` at ``caveat`` severity.

        **Signing is the alternative, not the requirement.** A caller that can publish an Ed25519 key directory and sign
        per RFC 9421 (Web Bot Auth profile: cover ``@authority`` and ``signature-agent``, tag ``web-bot-auth``, with
        ``created``, ``expires``, a ``nonce`` and a ``keyid`` that is the base64url JWK SHA-256 thumbprint) is issued at
        a higher tier with a larger budget and no challenges. That allowance IS a total and never refills. GET this path
        for the full ladder.

        Args:
            body: The request body.
            signature_agent: The https origin publishing your key directory, as a structured-field string:
                "https://your-host.example".
            signature_input: RFC 9421 covered components and parameters, e.g. sig=("@authority"
                "signature-agent");created=…;expires=…;keyid="…";alg="ed25519";nonce="…";tag="web-bot-auth"
            signature: sig=:<base64 ed25519 signature>: Send all three signature headers or none.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/agent-key"),
            headers=[
                param[str | None]("Signature-Agent", signature_agent),
                param[str | None]("Signature-Input", signature_input),
                param[str | None]("Signature", signature),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[AgentKeyRequest | AgentKeyRequestDict](body),
            decoder=async_json_decoder[TrialKey],
            error_mapper=mint_agent_key_error_mapper,
            request_options=request_options,
        )

    async def take_challenge(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ChallengeIssued, TakeChallengeErrorBody]:
        """A trial key whose grant is spent asks for three new calls, is locked to them, answers, and is unlocked again
        — as often as needed. Replacing an outstanding challenge is allowed; it grants extra calls only if the previous
        questions turned out to be unanswerable from our side too.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/agent-key/challenge"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[ChallengeIssued],
            error_mapper=take_challenge_error_mapper,
            request_options=request_options,
        )
