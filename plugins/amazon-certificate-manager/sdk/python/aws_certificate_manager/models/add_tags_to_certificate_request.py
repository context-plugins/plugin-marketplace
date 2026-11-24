from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .tag_model import TagModel, TagModelDict


class AddTagsToCertificateRequest(SdkBaseModel):
    certificate_arn: str = Field(alias="CertificateArn")
    """String that contains the ARN of the ACM certificate to which the tag is to be applied. This must be of the form:
    arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 For more information about ARNs,
    see Amazon Resource Names (ARNs)."""

    tags: list[TagModel] = Field(alias="Tags")
    """The key-value pair that defines the tag. The tag value is optional."""


class AddTagsToCertificateRequestDict(TypedDict):
    certificate_arn: str
    tags: list[TagModelDict]
