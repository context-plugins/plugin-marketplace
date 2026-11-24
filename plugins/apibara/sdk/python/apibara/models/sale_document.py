from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.pending_status import PendingStatusOrStr


class SaleDocument(SdkBaseModel):
    """Normalized auction sale/title document metadata. issuing_state is the document/title issuer state and is distinct
    from the auction yard/location state."""

    name: OptionalNullable[str] = UNSET
    """Normalized sale document name."""

    raw_name: OptionalNullable[str] = UNSET
    """Source-style display label preserving the title issuing state when available."""

    issuing_state: OptionalNullable[str] = UNSET
    """State that issued the title/document when explicitly supplied by the auction source. This is not the auction yard
    state."""

    type_: OptionalNullable[str] = Field(default=UNSET, alias="type")
    export: OptionalNullable[bool] = UNSET
    registration: OptionalNullable[bool] = UNSET
    is_pending: Optional[bool] = UNSET
    pending_status: Optional[PendingStatusOrStr] = UNSET
    pending_source: OptionalNullable[str] = UNSET
    page_id: OptionalNullable[int] = UNSET
    sale_document_group: OptionalNullable[str] = UNSET


class SaleDocumentDict(TypedDict):
    name: NotRequired[str | None]
    raw_name: NotRequired[str | None]
    issuing_state: NotRequired[str | None]
    type_: NotRequired[str | None]
    export: NotRequired[bool | None]
    registration: NotRequired[bool | None]
    is_pending: NotRequired[bool]
    pending_status: NotRequired[PendingStatusOrStr]
    pending_source: NotRequired[str | None]
    page_id: NotRequired[int | None]
    sale_document_group: NotRequired[str | None]
