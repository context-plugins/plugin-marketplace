from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class ListTagsForResourceResponse(SdkBaseModel):
    resource_arn: Optional[str] = Field(default=UNSET, alias="ResourceArn")
    """The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Tags associated with the Amazon Comprehend resource being queried. A tag is a key-value pair that adds as a
    metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a
    resource to indicate its use by the sales department."""


class ListTagsForResourceResponseDict(TypedDict):
    resource_arn: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
