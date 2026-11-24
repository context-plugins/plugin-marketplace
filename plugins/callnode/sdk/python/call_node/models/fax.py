from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.charge_status_callnode_io_faxes_api import ChargeStatusCallnodeIoFaxesApiOrStr
from .enums.direction import DirectionOrStr
from .enums.resolution1 import Resolution1OrStr
from .enums.status_callnode_io_faxes_api import StatusCallnodeIoFaxesApiOrStr


class Fax(SdkBaseModel):
    id: Optional[str] = UNSET
    direction: Optional[DirectionOrStr] = UNSET
    status: Optional[StatusCallnodeIoFaxesApiOrStr] = UNSET
    from_: Optional[str] = Field(default=UNSET, alias="from")
    """Plus sign followed by 7–15 digits."""

    to: Optional[str] = UNSET
    """Plus sign followed by 7–15 digits."""

    pages: OptionalNullable[int] = UNSET
    """Pages in the document (sent) or announced (received)."""

    pages_transferred: Optional[int] = Field(default=UNSET, alias="pagesTransferred")
    """Pages actually transmitted; what is charged."""

    resolution: Optional[Resolution1OrStr] = UNSET
    header: OptionalNullable[str] = UNSET
    result_text: OptionalNullable[str] = Field(default=UNSET, alias="resultText")
    """The fax engine's result"""

    remote_station_id: OptionalNullable[str] = Field(default=UNSET, alias="remoteStationId")
    """The far machine's station ID (TSI/CSI)."""

    t38: OptionalNullable[bool] = UNSET
    """Whether T.38 was negotiated (null until the session ran)."""

    ecm: OptionalNullable[bool] = UNSET
    has_document: Optional[bool] = Field(default=UNSET, alias="hasDocument")
    cost_usd: OptionalNullable[float] = Field(default=UNSET, alias="costUsd")
    """Charged when the fax finished; null before."""

    charge_status: OptionalNullable[ChargeStatusCallnodeIoFaxesApiOrStr] = Field(default=UNSET, alias="chargeStatus")
    test_mode: Optional[bool] = Field(default=UNSET, alias="testMode")
    metadata: OptionalNullable[Any] = UNSET
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    started_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startedAt")
    completed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="completedAt")
    estimated_cost: OptionalNullable[float] = Field(default=UNSET, alias="estimatedCost")
    """On the send response only - every page at the rate."""

    replay: Optional[bool] = UNSET
    """On the send response only - true when an idempotency key replayed an earlier send."""


class FaxDict(TypedDict):
    id: NotRequired[str]
    direction: NotRequired[DirectionOrStr]
    status: NotRequired[StatusCallnodeIoFaxesApiOrStr]
    from_: NotRequired[str]
    to: NotRequired[str]
    pages: NotRequired[int | None]
    pages_transferred: NotRequired[int]
    resolution: NotRequired[Resolution1OrStr]
    header: NotRequired[str | None]
    result_text: NotRequired[str | None]
    remote_station_id: NotRequired[str | None]
    t38: NotRequired[bool | None]
    ecm: NotRequired[bool | None]
    has_document: NotRequired[bool]
    cost_usd: NotRequired[float | None]
    charge_status: NotRequired[ChargeStatusCallnodeIoFaxesApiOrStr | None]
    test_mode: NotRequired[bool]
    metadata: NotRequired[Any | None]
    created_at: NotRequired[RFC3339DateTime]
    started_at: NotRequired[RFC3339DateTime | None]
    completed_at: NotRequired[RFC3339DateTime | None]
    estimated_cost: NotRequired[float | None]
    replay: NotRequired[bool]
