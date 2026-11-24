from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Release1(SdkBaseModel):
    """The release the results tested — any of provider, model, modelVersion, promptHash, guardrailsHash — with results,
    a report or a pull. Evidence that names another release than the AI system now runs does not count towards a
    control"""

    model_config = ConfigDict(extra="forbid")

    provider: Optional[str] = UNSET
    model: Optional[str] = UNSET
    model_version: Optional[str] = Field(default=UNSET, alias="modelVersion")
    prompt_hash: Optional[str] = Field(default=UNSET, alias="promptHash")
    """The prompt's digest, as the release recorded it: sha256:…, a commit or a tag"""

    guardrails_hash: Optional[str] = Field(default=UNSET, alias="guardrailsHash")
    """The guardrail configuration's digest"""


class Release1Dict(TypedDict):
    provider: NotRequired[str]
    model: NotRequired[str]
    model_version: NotRequired[str]
    prompt_hash: NotRequired[str]
    guardrails_hash: NotRequired[str]
