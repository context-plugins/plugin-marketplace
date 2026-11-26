"""``http`` / ``basic`` -- RFC 7617."""

from __future__ import annotations

from base64 import b64encode
from dataclasses import dataclass
from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field, field_validator
from typing_extensions import TypedDict

from ...params import param
from ..models import AuthParams


class BasicAuthCredentials(BaseModel):
    """The user-id and password of an ``http``/``basic`` scheme (RFC 7617)."""

    model_config = ConfigDict(frozen=True, extra="forbid")

    username: str
    password: str = Field(repr=False)

    @field_validator("username")
    @classmethod
    def _reject_colon(cls, value: str) -> str:
        if ":" in value:
            raise ValueError(
                "username must not contain ':' -- RFC 7617 encodes 'user-id:password', so a colon "
                f"in the user-id cannot be decoded unambiguously; got {value!r}"
            )
        return value

    @classmethod
    def coerce(cls, value: BasicAuthCredentialsOrDict) -> BasicAuthCredentials:
        """Accept either spelling, validating the mapping form.

        Unlike the other coercion seams in this runtime, no credential model's ``coerce`` takes
        ``None``: an absent credential means *no scheme*, which the client decides before this.

        Args:
            value: The credential, as the typed model or as a mapping.

        Returns:
            The validated model, passed straight through when it already is one.

        Raises:
            ValidationError: If the mapping is missing a key, carries an unknown one, or holds a
                user-id with a colon. It subclasses ``ValueError``."""
        if isinstance(value, cls):
            return value
        return cls.model_validate(value)


class BasicAuthCredentialsDict(TypedDict):
    username: str
    password: str


BasicAuthCredentialsOrDict: TypeAlias = BasicAuthCredentials | BasicAuthCredentialsDict
"""What a Basic credential accepts: the typed model, or a mapping carrying the same two keys."""


@dataclass(frozen=True, slots=True)
class BasicAuthScheme:
    """``http``/``basic``: ``Authorization: Basic base64(user-id:password)``."""

    credentials: BasicAuthCredentials

    def apply(self) -> AuthParams:
        raw = f"{self.credentials.username}:{self.credentials.password}"
        encoded = b64encode(raw.encode()).decode()
        return AuthParams(headers=(param[str]("Authorization", f"Basic {encoded}"),))
