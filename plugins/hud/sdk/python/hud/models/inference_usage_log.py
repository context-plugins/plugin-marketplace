from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class InferenceUsageLog(SdkBaseModel):
    """One inference request; QA analysis requests report ``model`` as the HUD QA label."""

    id: UUID
    created_at: RFC3339DateTime
    model: str
    qa_analysis: bool = False
    cost: float
    type_: str = Field(alias="type")
    model_checkpoint_id: Optional[UUID] = UNSET
    checkpoint: Optional[Any] = UNSET
    metadata: Optional[Any] = UNSET
    user_id: Optional[UUID] = UNSET
    user_name: Optional[str] = UNSET
    user_email: Optional[str] = UNSET
    api_key_id: Optional[UUID] = UNSET
    api_key_name: Optional[str] = UNSET
    byok: bool = False
    byok_credential_id: Optional[UUID] = UNSET


class InferenceUsageLogDict(TypedDict):
    id: UUID
    created_at: RFC3339DateTime
    model: str
    qa_analysis: NotRequired[bool]
    cost: float
    type_: str
    model_checkpoint_id: NotRequired[UUID]
    checkpoint: NotRequired[Any]
    metadata: NotRequired[Any]
    user_id: NotRequired[UUID]
    user_name: NotRequired[str]
    user_email: NotRequired[str]
    api_key_id: NotRequired[UUID]
    api_key_name: NotRequired[str]
    byok: NotRequired[bool]
    byok_credential_id: NotRequired[UUID]
