from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .submitted_runtime_config import SubmittedRuntimeConfig, SubmittedRuntimeConfigDict
from .submitted_verifier_task import SubmittedVerifierTask, SubmittedVerifierTaskDict
from .unions.columns2 import Columns2, Columns2Dict


class TaskUploadItem(SdkBaseModel):
    """Single item in a /tasks/upload payload.

    Three shapes coexist:
      - v6 shape: ``env={"name": ...}`` + ``task_id`` (the bare task id from the
        env's manifest) + ``args``/``validation``/``agent_config``. Resolved with
        an exact lookup against the env's latest build; ``args`` are validated
        against the task's manifest args schema.
      - Pre-resolved shape: caller supplies ``scenario_id`` explicitly (tests
        and direct API consumers).
      - Build shape: ``build_id``, optionally with ``scenario_name``. The build
        may not be built yet; the task binds to the named scenario when it is.
        Without ``scenario_name`` the build's source defines the task, which
        stays unbound.

    Name-resolved shapes win over ``scenario_id`` (the resolver re-derives the scenario from the env name + latest
    build)."""

    name: str
    description: Optional[str] = UNSET
    external_id: Optional[str] = UNSET
    env: Optional[Any] = UNSET
    task_id: Optional[str] = UNSET
    args: Optional[Any] = UNSET
    validation: Optional[list[Any]] = UNSET
    system_prompt: Optional[str] = UNSET
    agent_config: Optional[Any] = UNSET
    columns: Optional[dict[str, Columns2]] = UNSET
    runtime_config: Optional[SubmittedRuntimeConfig] = UNSET
    verifier: Optional[SubmittedVerifierTask] = UNSET
    scenario_id: Optional[UUID] = UNSET
    build_id: Optional[UUID] = UNSET
    scenario_name: Optional[str] = UNSET
    keep_existing: bool = False
    """Leave a task the taskset already has under this external id unchanged"""


class TaskUploadItemDict(TypedDict):
    name: str
    description: NotRequired[str]
    external_id: NotRequired[str]
    env: NotRequired[Any]
    task_id: NotRequired[str]
    args: NotRequired[Any]
    validation: NotRequired[list[Any]]
    system_prompt: NotRequired[str]
    agent_config: NotRequired[Any]
    columns: NotRequired[dict[str, Columns2Dict]]
    runtime_config: NotRequired[SubmittedRuntimeConfigDict]
    verifier: NotRequired[SubmittedVerifierTaskDict]
    scenario_id: NotRequired[UUID]
    build_id: NotRequired[UUID]
    scenario_name: NotRequired[str]
    keep_existing: NotRequired[bool]
