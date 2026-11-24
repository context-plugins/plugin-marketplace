from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .model_capacity import ModelCapacity, ModelCapacityDict
from .provider_response import ProviderResponse, ProviderResponseDict


class ModelResponse(SdkBaseModel):
    id: UUID
    model_name: str
    name: Optional[str] = UNSET
    provider: Optional[ProviderResponse] = UNSET
    routes: Optional[list[str]] = UNSET
    is_beta: bool = False
    hidden: bool = False
    is_trainable: bool = False
    public: bool = True
    checkpoint_count: Optional[int] = UNSET
    inference_count: Optional[int] = UNSET
    """Lifetime platform-wide inference-call count. Null for signed-out callers."""

    fork_of_model_id: Optional[UUID] = UNSET
    fork_of_model_name: Optional[str] = UNSET
    context_window: Optional[int] = UNSET
    sdk_agent_type: str
    input_cost_per_token: Optional[float] = UNSET
    output_cost_per_token: Optional[float] = UNSET
    pricing_config: Optional[Any] = UNSET
    request_defaults: Optional[Any] = UNSET
    metadata: Optional[Any] = UNSET
    created_at: RFC3339DateTime
    released_at: Optional[RFC3339DateTime] = UNSET
    """Vendor-published release time. Null until an admin sets it; not catalog insert time."""

    deprecated_at: Optional[RFC3339DateTime] = UNSET
    """Vendor retirement time. Null = not deprecated. A future value announces the date; once it passes, the gateway
    rejects requests for the model."""

    deprecation_message: Optional[str] = UNSET
    """Operator-set deprecation notice shown in the UI and returned on rejected requests."""

    can_edit: bool = False
    capacity: Optional[ModelCapacity] = UNSET
    """Hosted rollout capacity, on serving global models in signed-in list responses. Null otherwise, or while no
    scheduler pass has run recently."""


class ModelResponseDict(TypedDict):
    id: UUID
    model_name: str
    name: NotRequired[str]
    provider: NotRequired[ProviderResponseDict]
    routes: NotRequired[list[str]]
    is_beta: NotRequired[bool]
    hidden: NotRequired[bool]
    is_trainable: NotRequired[bool]
    public: NotRequired[bool]
    checkpoint_count: NotRequired[int]
    inference_count: NotRequired[int]
    fork_of_model_id: NotRequired[UUID]
    fork_of_model_name: NotRequired[str]
    context_window: NotRequired[int]
    sdk_agent_type: str
    input_cost_per_token: NotRequired[float]
    output_cost_per_token: NotRequired[float]
    pricing_config: NotRequired[Any]
    request_defaults: NotRequired[Any]
    metadata: NotRequired[Any]
    created_at: RFC3339DateTime
    released_at: NotRequired[RFC3339DateTime]
    deprecated_at: NotRequired[RFC3339DateTime]
    deprecation_message: NotRequired[str]
    can_edit: NotRequired[bool]
    capacity: NotRequired[ModelCapacityDict]
