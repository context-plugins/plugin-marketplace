from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .encryption_configuration import EncryptionConfiguration, EncryptionConfigurationDict
from .tag_model import TagModel, TagModelDict


class CreateActivityInput(SdkBaseModel):
    name: str
    r"""The name of the activity to create. This name must be unique for your Amazon Web Services account and region. A
    name must not contain: white space brackets { } [ ] wildcard characters ? * special characters " # % \ ^ | ~ ` $ & ,
    ; : / control characters (U+0000-001F, U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters (
    U+10FFFF) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _."""

    tags: Optional[list[TagModel]] = UNSET
    """The list of tags to add to a resource. An array of key-value pairs. For more information, see Using Cost
    Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide, and Controlling Access Using IAM
    Tags. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @."""

    encryption_configuration: Optional[EncryptionConfiguration] = Field(default=UNSET, alias="encryptionConfiguration")


class CreateActivityInputDict(TypedDict):
    name: str
    tags: NotRequired[list[TagModelDict]]
    encryption_configuration: NotRequired[EncryptionConfigurationDict]
