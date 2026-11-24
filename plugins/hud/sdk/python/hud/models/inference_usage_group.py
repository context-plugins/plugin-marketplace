from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.byok_scope import ByokScopeOrStr


class InferenceUsageGroup(SdkBaseModel):
    """One group within a bucket.

    The dimension fields matching the requested ``group_by`` dimensions are set; all are None for ungrouped queries.
    ``api_key_id``/``user_id`` may be set with a None name (deleted user, key created before attribution); a None
    ``api_key_id`` group under ``group_by=api_key`` collects Clerk-session (non-key) usage. Under ``group_by=model``, QA
    analysis inference forms one ``qa_analysis`` group whose ``model`` is the HUD QA label rather than the model it ran
    on."""

    api_key_id: Optional[UUID] = UNSET
    api_key_name: Optional[str] = UNSET
    api_key_is_default: bool = False
    api_key_owner: Optional[str] = UNSET
    byok: bool = False
    byok_credential_id: Optional[UUID] = UNSET
    byok_name: Optional[str] = UNSET
    byok_scope: Optional[ByokScopeOrStr] = UNSET
    byok_owner: Optional[str] = UNSET
    model: Optional[str] = UNSET
    qa_analysis: bool = False
    user_id: Optional[UUID] = UNSET
    user_name: Optional[str] = UNSET
    route: Optional[str] = UNSET
    requests: int
    input_tokens: int
    output_tokens: int
    cached_input_tokens: int
    cost: float


class InferenceUsageGroupDict(TypedDict):
    api_key_id: NotRequired[UUID]
    api_key_name: NotRequired[str]
    api_key_is_default: NotRequired[bool]
    api_key_owner: NotRequired[str]
    byok: NotRequired[bool]
    byok_credential_id: NotRequired[UUID]
    byok_name: NotRequired[str]
    byok_scope: NotRequired[ByokScopeOrStr]
    byok_owner: NotRequired[str]
    model: NotRequired[str]
    qa_analysis: NotRequired[bool]
    user_id: NotRequired[UUID]
    user_name: NotRequired[str]
    route: NotRequired[str]
    requests: int
    input_tokens: int
    output_tokens: int
    cached_input_tokens: int
    cost: float
