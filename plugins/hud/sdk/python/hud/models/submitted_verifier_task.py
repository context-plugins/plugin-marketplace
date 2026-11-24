from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .submitted_runtime_config import SubmittedRuntimeConfig, SubmittedRuntimeConfigDict


class SubmittedVerifierTask(SdkBaseModel):
    """Nested verifier task carried by a task row."""

    model_config = ConfigDict(extra="forbid")

    env: str
    id: str
    args: Optional[Any] = UNSET
    slug: str
    validation: Optional[list[Any]] = UNSET
    agent_config: Optional[Any] = UNSET
    columns: Optional[Any] = UNSET
    runtime_config: Optional[SubmittedRuntimeConfig] = UNSET


class SubmittedVerifierTaskDict(TypedDict):
    env: str
    id: str
    args: NotRequired[Any]
    slug: str
    validation: NotRequired[list[Any]]
    agent_config: NotRequired[Any]
    columns: NotRequired[Any]
    runtime_config: NotRequired[SubmittedRuntimeConfigDict]
