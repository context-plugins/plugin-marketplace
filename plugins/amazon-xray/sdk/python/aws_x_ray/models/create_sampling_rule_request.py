from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sampling_rule import SamplingRule, SamplingRuleDict
from .tag_model import TagModel, TagModelDict


class CreateSamplingRuleRequest(SdkBaseModel):
    sampling_rule: SamplingRule = Field(alias="SamplingRule")
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A map that contains one or more tag keys and tag values to attach to an X-Ray sampling rule. For more information
    about ways to use tags, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference. The
    following restrictions apply to tags: Maximum number of user-applied tags per resource: 50 Maximum tag key length:
    128 Unicode characters Maximum tag value length: 256 Unicode characters Valid values for key and value: a-z, A-Z,
    0-9, space, and the following characters: _ . : / = + - and @ Tag keys and values are case sensitive. Don't use aws:
    as a prefix for keys; it"""


class CreateSamplingRuleRequestDict(TypedDict):
    sampling_rule: SamplingRuleDict
    tags: NotRequired[list[TagModelDict]]
