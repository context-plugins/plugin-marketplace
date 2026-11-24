from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.model import Model, ModelOrStr
from .run_browser_settings import RunBrowserSettings, RunBrowserSettingsDict
from .run_judge_settings import RunJudgeSettings, RunJudgeSettingsDict
from .secret_binding import SecretBinding, SecretBindingDict
from .unions.maxcostusd import Maxcostusd, MaxcostusdDict


class RunCreateRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    task: str
    output_schema: Optional[Any] = Field(default=UNSET, alias="outputSchema")
    """Optional JSON Schema for the final output (API runs only)."""

    model: ModelOrStr = Model.GPT_6_LUNA
    """bu-ultrafast and bu-fast are early-access ultrafast presets; they take no modelParams and are rejected for
    projects without access."""

    model_params: Optional[Any] = Field(default=UNSET, alias="modelParams")
    """Optional provider-native request parameters for the selected model, written with the provider's own field names
    and values and forwarded unchanged (e.g. {"reasoning": {"effort": "high"}} for OpenAI, {"thinking": {"type":
    "adaptive"}} for Anthropic, {"thinkingConfig": {"thinkingLevel": "high"}} for Google). Supported paths and values
    are per-model; an unsupported path, value, or a model that accepts no parameters at all is rejected with 422.
    Omitting this field applies the model's default parameters (gpt-6-luna defaults to {"reasoning": {"effort":
    "high"}}); passing {} opts out of that default and leaves the provider's own defaults in place."""

    session_id: Optional[UUID] = Field(default=UNSET, alias="sessionId")
    workspace_id: Optional[UUID] = Field(default=UNSET, alias="workspaceId")
    browser_settings: Optional[RunBrowserSettings] = Field(default=UNSET, alias="browserSettings")
    keep_alive: Optional[int] = Field(default=UNSET, alias="keepAlive")
    """Seconds the session's browser stays open after its last run, so a follow-up run reuses the same page, never past
    the browser's 4 h lifetime. Default 120. Follow-up runs inherit the session's value; send a new value to change it
    or null to restore the default. Kept time is billed as browser time. Ignored (always 120) for free-tier and Zero
    Data Retention projects."""

    agentmail: bool = False
    """If true, provisions a persistent temporary email inbox (via AgentMail) for the run workspace. The agent receives
    the email address in its context and can send, receive, read, and reply to email. Set false to disable AgentMail for
    this run."""

    agentcard_wallet_id: Optional[UUID] = Field(default=UNSET, alias="agentcardWalletId")
    stripe_link_connection_id: Optional[UUID] = Field(default=UNSET, alias="stripeLinkConnectionId")
    agentic_autofill_grant_id: Optional[UUID] = Field(default=UNSET, alias="agenticAutofillGrantId")
    attached_file_ids: Optional[list[UUID]] = Field(default=UNSET, alias="attachedFileIds")
    secret_bindings: Optional[list[SecretBinding]] = Field(default=UNSET, alias="secretBindings")
    """Credentials this run may use without ever seeing them. The agent can ask the server to type a binding by alias on
    one of its allowed domains; it cannot read the value. Bindings are not persisted past the run."""

    op_vault_id: Optional[str] = Field(default=UNSET, alias="opVaultId")
    """A 1Password vault id whose items become typed secrets for this run. The project's connected 1Password integration
    is resolved server-side; no per-item ids are needed."""

    op_vault_allowed_domains: Optional[list[str]] = Field(default=UNSET, alias="opVaultAllowedDomains")
    """Hosts every credential from opVaultId may be typed into, e.g. ["amazon.com"]. Omit to derive each item's hosts
    from its own 1Password website entries; items with no website are then skipped and reported in skippedVaultItems. A
    host covers its subdomains, so 1Password's ExactDomain autofill setting is not honored either way."""

    judge: Optional[RunJudgeSettings] = UNSET
    max_cost_usd: Optional[Maxcostusd] = Field(default=UNSET, alias="maxCostUsd")


class RunCreateRequestDict(TypedDict):
    task: str
    output_schema: NotRequired[Any]
    model: NotRequired[ModelOrStr]
    model_params: NotRequired[Any]
    session_id: NotRequired[UUID]
    workspace_id: NotRequired[UUID]
    browser_settings: NotRequired[RunBrowserSettingsDict]
    keep_alive: NotRequired[int]
    agentmail: NotRequired[bool]
    agentcard_wallet_id: NotRequired[UUID]
    stripe_link_connection_id: NotRequired[UUID]
    agentic_autofill_grant_id: NotRequired[UUID]
    attached_file_ids: NotRequired[list[UUID]]
    secret_bindings: NotRequired[list[SecretBindingDict]]
    op_vault_id: NotRequired[str]
    op_vault_allowed_domains: NotRequired[list[str]]
    judge: NotRequired[RunJudgeSettingsDict]
    max_cost_usd: NotRequired[MaxcostusdDict]
