from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status_juri_sign_public_forms_api import StatusJuriSignPublicFormsApiOrStr
from .template import Template, TemplateDict


class PublicForm(SdkBaseModel):
    id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET
    status: Optional[StatusJuriSignPublicFormsApiOrStr] = UNSET
    public_url: Optional[str] = UNSET
    """The shareable link to publish"""

    template: Optional[Template] = UNSET
    expires_at: OptionalNullable[RFC3339DateTime] = UNSET
    daily_submission_limit: OptionalNullable[int] = UNSET
    submissions_count: Optional[int] = UNSET
    last_submitted_at: OptionalNullable[RFC3339DateTime] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET


class PublicFormDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    status: NotRequired[StatusJuriSignPublicFormsApiOrStr]
    public_url: NotRequired[str]
    template: NotRequired[TemplateDict]
    expires_at: NotRequired[RFC3339DateTime | None]
    daily_submission_limit: NotRequired[int | None]
    submissions_count: NotRequired[int]
    last_submitted_at: NotRequired[RFC3339DateTime | None]
    created_at: NotRequired[RFC3339DateTime]
