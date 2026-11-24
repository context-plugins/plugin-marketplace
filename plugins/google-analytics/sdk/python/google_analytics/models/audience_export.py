from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state import StateOrStr
from .v1_beta_audience_dimension import V1BetaAudienceDimension, V1BetaAudienceDimensionDict


class AudienceExport(SdkBaseModel):
    """An audience export is a list of users in an audience at the time of the list's creation. One audience may have
    multiple audience exports created for different days."""

    percentage_completed: Optional[float] = Field(default=UNSET, alias="percentageCompleted")
    """Output only. The percentage completed for this audience export ranging between 0 to 100."""

    audience_display_name: Optional[str] = Field(default=UNSET, alias="audienceDisplayName")
    """Output only. The descriptive display name for this audience. For example, "Purchasers"."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Output only. The total number of rows in the AudienceExport result."""

    dimensions: Optional[list[V1BetaAudienceDimension]] = UNSET
    """Required. The dimensions requested and displayed in the query response."""

    audience: Optional[str] = UNSET
    """Required. The audience resource name. This resource name identifies the audience being listed and is shared
    between the Analytics Data & Admin APIs. Format: ``properties/{property}/audiences/{audience}``"""

    state: Optional[StateOrStr] = UNSET
    """Output only. The current state for this AudienceExport."""

    error_message: Optional[str] = Field(default=UNSET, alias="errorMessage")
    """Output only. Error message is populated when an audience export fails during creation. A common reason for such a
    failure is quota exhaustion."""

    creation_quota_tokens_charged: Optional[int] = Field(default=UNSET, alias="creationQuotaTokensCharged")
    """Output only. The total quota tokens charged during creation of the AudienceExport. Because this token count is
    based on activity from the ``CREATING`` state, this tokens charged will be fixed once an AudienceExport enters the
    ``ACTIVE`` or ``FAILED`` states."""

    begin_creating_time: Optional[str] = Field(default=UNSET, alias="beginCreatingTime")
    """Output only. The time when CreateAudienceExport was called and the AudienceExport began the ``CREATING``
    state."""

    name: Optional[str] = UNSET
    """Output only. Identifier. The audience export resource name assigned during creation. This resource name
    identifies this ``AudienceExport``. Format: ``properties/{property}/audienceExports/{audience_export}``"""


class AudienceExportDict(TypedDict):
    percentage_completed: NotRequired[float]
    audience_display_name: NotRequired[str]
    row_count: NotRequired[int]
    dimensions: NotRequired[list[V1BetaAudienceDimensionDict]]
    audience: NotRequired[str]
    state: NotRequired[StateOrStr]
    error_message: NotRequired[str]
    creation_quota_tokens_charged: NotRequired[int]
    begin_creating_time: NotRequired[str]
    name: NotRequired[str]
