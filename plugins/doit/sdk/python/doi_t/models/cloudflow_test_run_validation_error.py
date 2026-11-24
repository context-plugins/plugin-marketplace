from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detail_doi_t_cloud_flow_api import DetailDoiTCloudFlowApi, DetailDoiTCloudFlowApiDict


class CloudflowTestRunValidationError(SdkBaseModel):
    """Validation outcome for a test run. Returned on ``200`` for ``?dryRun=true``, and on ``422`` — with the problem
    fields populated — when a flow cannot be run."""

    valid: bool
    """True when the flow passed every check and is runnable."""

    details: Optional[list[DetailDoiTCloudFlowApi]] = UNSET
    """One entry per node that must be fixed. Present only when ``valid`` is false."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    title: Optional[str] = UNSET
    status: Optional[int] = UNSET
    detail: Optional[str] = UNSET
    code: Optional[str] = UNSET
    retryable: Optional[bool] = UNSET


class CloudflowTestRunValidationErrorDict(TypedDict):
    valid: bool
    details: NotRequired[list[DetailDoiTCloudFlowApiDict]]
    type_: NotRequired[str]
    title: NotRequired[str]
    status: NotRequired[int]
    detail: NotRequired[str]
    code: NotRequired[str]
    retryable: NotRequired[bool]
