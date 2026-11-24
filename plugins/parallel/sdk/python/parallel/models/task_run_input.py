from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mcp_server_parallel_ai_tasks_api import McpServerParallelAiTasksApi, McpServerParallelAiTasksApiDict
from .source_policy import SourcePolicy, SourcePolicyDict
from .task_advanced_settings import TaskAdvancedSettings, TaskAdvancedSettingsDict
from .task_spec import TaskSpec, TaskSpecDict
from .unions.metadata1 import Metadata1, Metadata1Dict
from .webhook import Webhook, WebhookDict


class TaskRunInput(SdkBaseModel):
    """Request to run a task."""

    processor: str
    """Processor to use for the task."""

    metadata: Optional[dict[str, Metadata1]] = UNSET
    """User-provided metadata stored with the run. Keys and values must be strings with a maximum length of 16 and 512
    characters respectively."""

    memory_scope_key: Optional[str] = UNSET
    """User-provided key identifying the memory scope to use. Omit to use personal memory, if available."""

    source_policy: Optional[SourcePolicy] = UNSET
    """Optional source policy governing preferred and disallowed domains in web search results."""

    advanced_settings: Optional[TaskAdvancedSettings] = UNSET
    """Advanced search configuration for the task run."""

    task_spec: Optional[TaskSpec] = UNSET
    """Task specification. If unspecified, defaults to auto output schema."""

    input: str
    """Input to the task, either text or a JSON object."""

    previous_interaction_id: Optional[str] = UNSET
    """Interaction ID to use as context for this request."""

    mcp_servers: Optional[list[McpServerParallelAiTasksApi]] = UNSET
    """Optional list of MCP servers to use for the run."""

    enable_events: Optional[bool] = UNSET
    """Controls tracking of task run execution progress. When set to true, progress events are recorded and can be
    accessed via the `Task Run events <https://docs.parallel.ai/api-reference>`__ endpoint. When false, no progress
    events are tracked. Note that progress tracking cannot be enabled after a run has been created. The flag is set to
    true by default for premium processors (pro and above)."""

    webhook: Optional[Webhook] = UNSET
    """Callback URL (webhook endpoint) that will receive an HTTP POST when the run completes. This feature is not
    available via the Python SDK."""


class TaskRunInputDict(TypedDict):
    processor: str
    metadata: NotRequired[dict[str, Metadata1Dict]]
    memory_scope_key: NotRequired[str]
    source_policy: NotRequired[SourcePolicyDict]
    advanced_settings: NotRequired[TaskAdvancedSettingsDict]
    task_spec: NotRequired[TaskSpecDict]
    input: str
    previous_interaction_id: NotRequired[str]
    mcp_servers: NotRequired[list[McpServerParallelAiTasksApiDict]]
    enable_events: NotRequired[bool]
    webhook: NotRequired[WebhookDict]
