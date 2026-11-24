from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExplainabilityInfo(SdkBaseModel):
    explainability_arn: Optional[str] = Field(default=UNSET, alias="ExplainabilityArn")
    """The Amazon Resource Name (ARN) of the Explainability."""

    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the Explainability. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED
    CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED"""


class ExplainabilityInfoDict(TypedDict):
    explainability_arn: NotRequired[str]
    status: NotRequired[str]
