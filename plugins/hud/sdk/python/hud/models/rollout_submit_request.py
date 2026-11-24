from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .submitted_agent_spec import SubmittedAgentSpec, SubmittedAgentSpecDict
from .submitted_runtime_config import SubmittedRuntimeConfig, SubmittedRuntimeConfigDict
from .submitted_verifier_task import SubmittedVerifierTask, SubmittedVerifierTaskDict


class RolloutSubmitRequest(SdkBaseModel):
    """One v6 rollout under the SDK's job/trace identity.

    The SDK's rollout atom mints ``trace_id``/``job_id`` and submits the task by reference — env name, task id (the
    ``@env.task`` name), bound args — plus the serialized agent spec. The platform materializes the task_version chain,
    schedules an instance, and runs the rollout co-located with the env; the SDK polls the trace to completion.

    ``slug`` is the taskset row key (``Task.external_id`` / portable ``Task.slug``). It is distinct from ``task`` (the
    ``@env.task`` id used for scenario lookup) and is only needed when a job's taskset has multiple versions sharing the
    same scenario+args."""

    trace_id: UUID
    job_id: UUID
    group_id: Optional[str] = UNSET
    env: str
    task: str
    slug: Optional[str] = UNSET
    args: Optional[Any] = UNSET
    runtime_config: Optional[SubmittedRuntimeConfig] = UNSET
    verifier: Optional[SubmittedVerifierTask] = UNSET
    agent: SubmittedAgentSpec
    """Registered identity a hosted runner rebuilds the agent from.

    Mirrors the v6 SDK's hosted submission: the ``AgentType`` value plus the ``Agent.dump()`` config with runtime-only
    state and credentials stripped. The control plane reads ``model`` (for inference routing and billing) and
    ``max_steps`` from ``config``, and stores ``config`` as submitted except that ``model`` becomes the catalog's
    canonical model name. The instance rebuilds the agent through ``AgentType``."""


class RolloutSubmitRequestDict(TypedDict):
    trace_id: UUID
    job_id: UUID
    group_id: NotRequired[str]
    env: str
    task: str
    slug: NotRequired[str]
    args: NotRequired[Any]
    runtime_config: NotRequired[SubmittedRuntimeConfigDict]
    verifier: NotRequired[SubmittedVerifierTaskDict]
    agent: SubmittedAgentSpecDict
