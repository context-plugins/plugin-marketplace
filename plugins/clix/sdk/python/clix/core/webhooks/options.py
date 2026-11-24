"""What a consumer configures to verify deliveries: the secret and the replay window.

The ``retry_options`` / ``logging_options`` shape: a frozen pydantic model, its closed dict companion, and the
union a facade accepts. Never read from the environment (ADR-0035), and the secret is never printed."""

from __future__ import annotations

from collections.abc import Callable
from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field, field_validator
from typing_extensions import NotRequired, TypedDict

from .request import WebhookRequest


class WebhookOptions(BaseModel):
    """How a generated verifier facade checks deliveries."""

    # The input is hidden from a ValidationError's text: a mistyped key would otherwise print the secret beside it.
    model_config = ConfigDict(frozen=True, extra="forbid", hide_input_in_errors=True)

    secret: str | Callable[[WebhookRequest], str] = Field(repr=False)
    """The shared signing secret, or a provider called with each delivery that returns it.

    A provider is what rotates a secret without rebuilding the verifier, or picks one per tenant from a header
    of the delivery. It runs after the header and replay-window checks, on every ``verify``."""

    replay_tolerance: float | None = Field(default=300.0, ge=0)
    """Seconds either side of now a delivery's timestamp may be. ``None`` disables the window."""

    @field_validator("secret")
    @classmethod
    def _reject_blank_secret(
        cls, secret: str | Callable[[WebhookRequest], str]
    ) -> str | Callable[[WebhookRequest], str]:
        if isinstance(secret, str) and not secret.strip():
            raise ValueError("The webhook signing secret is blank (WebhookOptions.secret).")
        return secret

    @classmethod
    def coerce(cls, options: WebhookOptionsOrDict) -> WebhookOptions:
        """Return ``options`` as a :class:`WebhookOptions`, dict-shaped input included.

        Args:
            options: The options, in either spelling.

        Returns:
            The validated options; an instance passes straight through.

        Raises:
            ValidationError: For an unknown key, a missing or blank secret, or an out-of-range value."""
        return options if isinstance(options, cls) else cls.model_validate(options)


class WebhookOptionsDict(TypedDict):
    """The dict-shaped spelling of :class:`WebhookOptions`, mirroring it field for field."""

    secret: str | Callable[[WebhookRequest], str]
    replay_tolerance: NotRequired[float | None]


WebhookOptionsOrDict: TypeAlias = WebhookOptions | WebhookOptionsDict
"""What a verifier facade accepts: the typed options, or a dict carrying the same keys."""
