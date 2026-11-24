from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .created_by import CreatedBy, CreatedByDict
from .enums.signing_order_type_juri_sign_templates_api import SigningOrderTypeJuriSignTemplatesApiOrStr


class TemplateJuriSignTemplatesApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET
    description: OptionalNullable[str] = UNSET
    subject: Optional[str] = UNSET
    signing_order_type: Optional[SigningOrderTypeJuriSignTemplatesApiOrStr] = UNSET
    expiry_hours: Optional[int] = UNSET
    require_selfie: Optional[bool] = UNSET
    requires_paraph: Optional[bool] = UNSET
    signer_count: Optional[int] = UNSET
    has_document: Optional[bool] = UNSET
    usage_count: Optional[int] = UNSET
    last_used_at: OptionalNullable[RFC3339DateTime] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    created_by: Optional[CreatedBy] = UNSET


class TemplateJuriSignTemplatesApiDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    description: NotRequired[str | None]
    subject: NotRequired[str]
    signing_order_type: NotRequired[SigningOrderTypeJuriSignTemplatesApiOrStr]
    expiry_hours: NotRequired[int]
    require_selfie: NotRequired[bool]
    requires_paraph: NotRequired[bool]
    signer_count: NotRequired[int]
    has_document: NotRequired[bool]
    usage_count: NotRequired[int]
    last_used_at: NotRequired[RFC3339DateTime | None]
    created_at: NotRequired[RFC3339DateTime]
    created_by: NotRequired[CreatedByDict]
