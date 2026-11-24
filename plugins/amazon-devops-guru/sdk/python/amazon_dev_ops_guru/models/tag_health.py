from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .insight_health import InsightHealth, InsightHealthDict


class TagHealth(SdkBaseModel):
    app_boundary_key: Optional[str] = Field(default=UNSET, alias="AppBoundaryKey")
    """An Amazon Web Services tag key that is used to identify the Amazon Web Services resources that DevOps Guru
    analyzes. All Amazon Web Services resources in your account and Region tagged with this key make up your DevOps Guru
    application and analysis boundary. The string used for a key in a tag that you use to define your resource coverage
    must begin with the prefix Devops-guru-. The tag key might be DevOps-Guru-deployment-application or
    devops-guru-rds-application. When you create a key, the case of characters in the key can be whatever you choose.
    After you create a key, it is case-sensitive."""

    tag_value: Optional[str] = Field(default=UNSET, alias="TagValue")
    """The value in an Amazon Web Services tag. The tag's value is an optional field used to associate a string with the
    tag key (for example, 111122223333, Production, or a team name). The key and value are the tag's key pair. Omitting
    the tag value is the same as using an empty string. Like tag keys, tag values are case-sensitive. You can specify a
    maximum of 256 characters for a tag value."""

    insight: Optional[InsightHealth] = Field(default=UNSET, alias="Insight")
    analyzed_resource_count: Optional[int] = Field(default=UNSET, alias="AnalyzedResourceCount")
    """Number of resources that DevOps Guru is monitoring in your account that are specified by an Amazon Web Services
    tag."""


class TagHealthDict(TypedDict):
    app_boundary_key: NotRequired[str]
    tag_value: NotRequired[str]
    insight: NotRequired[InsightHealthDict]
    analyzed_resource_count: NotRequired[int]
