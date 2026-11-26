"""HMAC signature verification, configured as data.

Everything a provider varies is a field, so a generated verifier names its API's scheme once and the runtime holds
no provider's literals. The checks run in order: the signature header is present; when a replay window is set, the
timestamp is inside it, **before** any HMAC; then any one of the header's signatures matches, which lets a
provider rotate its secret."""

from __future__ import annotations

import base64
import hmac
import time
from collections.abc import Callable, Sequence
from dataclasses import dataclass, field
from typing import Literal, TypeAlias

from typing_extensions import assert_never

from .request import WebhookRequest


@dataclass(frozen=True, slots=True)
class LiteralSegment:
    """Fixed text in the signed message, UTF-8."""

    text: str


@dataclass(frozen=True, slots=True)
class RawBodySegment:
    """The delivery's body bytes, exactly as received."""


@dataclass(frozen=True, slots=True)
class HeaderSegment:
    """A header's value, UTF-8; an absent header contributes nothing rather than raising."""

    name: str


MessageSegment: TypeAlias = LiteralSegment | RawBodySegment | HeaderSegment
"""One piece of the signed message; a verifier concatenates its segments in order."""


def _segment_to_bytes(segment: MessageSegment, request: WebhookRequest) -> bytes:
    match segment:
        case LiteralSegment(text=text):
            return text.encode("utf-8")
        case RawBodySegment():
            return request.body
        case HeaderSegment(name=name):
            return request.headers.get(name.lower(), "").encode("utf-8")
        case _:
            assert_never(segment)


SignatureAlgorithm: TypeAlias = Literal["sha256", "sha512"]
"""The HMAC's hash, named as ``hashlib`` names it."""

SignatureDigestEncoding: TypeAlias = Literal["hex", "base64", "base64url"]
"""How the digest is written in the header: lowercase hex, RFC 4648 §4 base64, or §5 base64url unpadded."""


def _encode_digest(encoding: SignatureDigestEncoding, mac: bytes) -> str:
    match encoding:
        case "hex":
            return mac.hex()
        case "base64":
            return base64.b64encode(mac).decode("ascii")
        case "base64url":
            return base64.urlsafe_b64encode(mac).rstrip(b"=").decode("ascii")
        case _:
            assert_never(encoding)


@dataclass(frozen=True, slots=True)
class RawSignatureHeader:
    """The whole header value is the one signature."""


@dataclass(frozen=True, slots=True)
class KeyValueSignatureHeader:
    """``t=…,sha256=…,sha256=…``: every value whose key is ``key``, split on the first ``=``, trimmed."""

    key: str


SignatureHeaderFormat: TypeAlias = RawSignatureHeader | KeyValueSignatureHeader
"""How a signature header lists the signatures a delivery carries."""


def _extract_signatures(header_format: SignatureHeaderFormat, value: str) -> list[str]:
    match header_format:
        case RawSignatureHeader():
            return [value]
        case KeyValueSignatureHeader(key=key):
            signatures: list[str] = []
            for pair in value.split(","):
                name, separator, signature = pair.partition("=")
                if separator and name.strip() == key:
                    signatures.append(signature.strip())
            return signatures
        case _:
            assert_never(header_format)


@dataclass(frozen=True, slots=True, kw_only=True)
class SignatureVerifier:
    """Decides whether a delivery was signed with ``secret`` under one provider's scheme.

    Keyword-only, so a generated construction is named and cannot transpose two strings. Built once per
    verifier facade, never per delivery."""

    secret: str | Callable[[WebhookRequest], str] = field(repr=False)
    """The shared secret, or a provider called with each delivery that returns it; its UTF-8 bytes are the
    HMAC key."""

    algorithm: SignatureAlgorithm

    digest_encoding: SignatureDigestEncoding

    message_segments: Sequence[MessageSegment]

    signature_header_name: str

    signature_header_format: SignatureHeaderFormat

    timestamp_header_name: str | None = None

    replay_tolerance: float | None = None
    """Seconds either side of now a delivery's timestamp may be; ``None`` disables the window."""

    def verify(self, request: WebhookRequest) -> bool:
        """Whether ``request`` carries a valid signature -- and, when a window is set, a fresh timestamp.

        Args:
            request: The delivery.

        Returns:
            ``True`` when every check passes; ``False`` for any failure, a missing header included.

        Raises:
            RuntimeError: If a secret provider returns a blank secret."""
        signature_header = request.headers.get(self.signature_header_name.lower())
        if signature_header is None:
            return False

        if self.replay_tolerance is not None:
            if not self.timestamp_header_name:
                return False
            timestamp = request.headers.get(self.timestamp_header_name.lower())
            # time.time is looked up per call, so a test can patch it on this module to fix the clock.
            if timestamp is None or not _within_replay_window(timestamp, time.time(), self.replay_tolerance):
                return False

        provided_signatures = _extract_signatures(self.signature_header_format, signature_header)
        if not provided_signatures:
            return False

        message = b"".join(_segment_to_bytes(segment, request) for segment in self.message_segments)
        secret = self.secret if isinstance(self.secret, str) else self.secret(request)
        if not secret.strip():
            raise RuntimeError("The webhook secret provider returned a blank secret.")
        mac = hmac.digest(secret.encode("utf-8"), message, self.algorithm)
        expected = _encode_digest(self.digest_encoding, mac).encode("ascii")
        # Bytes on both sides: compare_digest refuses a str holding anything but ASCII, and a provided signature
        # is attacker-controlled text.
        return any(hmac.compare_digest(expected, provided.encode("utf-8")) for provided in provided_signatures)


def _within_replay_window(timestamp: str, now: float, tolerance: float) -> bool:
    # Optional sign, ASCII digits, surrounding blanks: int() without its extras (1_000, non-ASCII digits).
    if not timestamp.isascii() or "_" in timestamp:
        return False
    try:
        sent_at = int(timestamp)
    except ValueError:
        # Not a number, or more digits than int() converts (4300): the header is the sender's, so never raise.
        return False
    return now - tolerance <= sent_at <= now + tolerance
