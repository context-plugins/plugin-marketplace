from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PutResourcePolicyOutput(SdkBaseModel):
    resource_arn: Optional[str] = Field(default=UNSET, alias="resourceArn")
    """The ARN of the Project or ReportGroup resource that is associated with a resource policy."""


class PutResourcePolicyOutputDict(TypedDict):
    resource_arn: NotRequired[str]
