from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class ApiV1AiSystemsModelChangeRequest(SdkBaseModel):
    provider: OptionalNullable[str] = UNSET
    model: OptionalNullable[str] = UNSET
    model_version: OptionalNullable[str] = Field(default=UNSET, alias="modelVersion")
    prompt_hash: OptionalNullable[str] = Field(default=UNSET, alias="promptHash")
    """A digest of the new prompt (sha256:…, a commit, a version tag); null when it is no longer recorded"""

    guardrails_hash: OptionalNullable[str] = Field(default=UNSET, alias="guardrailsHash")
    """A digest of the new guardrail configuration; null when it is no longer recorded"""

    note: Optional[str] = UNSET
    """What changed and why, for the record"""


class ApiV1AiSystemsModelChangeRequestDict(TypedDict):
    provider: NotRequired[str | None]
    model: NotRequired[str | None]
    model_version: NotRequired[str | None]
    prompt_hash: NotRequired[str | None]
    guardrails_hash: NotRequired[str | None]
    note: NotRequired[str]
