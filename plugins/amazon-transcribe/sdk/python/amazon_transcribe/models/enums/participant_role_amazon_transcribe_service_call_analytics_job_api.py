from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApi(str, Enum):
    """Specify the speaker you want to define. Omitting this parameter is equivalent to specifying both participants."""

    AGENT = "AGENT"
    CUSTOMER = "CUSTOMER"

    __str__ = str.__str__


ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApiOrStr: TypeAlias = Annotated[
    ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApi | str,
    open_enum_validator(ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApi),
]
