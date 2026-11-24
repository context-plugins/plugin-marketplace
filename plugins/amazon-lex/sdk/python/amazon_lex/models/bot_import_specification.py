from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_privacy import DataPrivacy, DataPrivacyDict
from .error_log_settings import ErrorLogSettings, ErrorLogSettingsDict


class BotImportSpecification(SdkBaseModel):
    bot_name: str = Field(alias="botName")
    """The name that Amazon Lex should use for the bot."""

    role_arn: str = Field(alias="roleArn")
    """The Amazon Resource Name (ARN) of the IAM role used to build and run the bot."""

    data_privacy: DataPrivacy = Field(alias="dataPrivacy")
    error_log_settings: Optional[ErrorLogSettings] = Field(default=UNSET, alias="errorLogSettings")
    idle_session_ttl_in_seconds: Optional[int] = Field(default=UNSET, alias="idleSessionTTLInSeconds")
    """The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. A user
    interaction remains active for the amount of time specified. If no conversation occurs during this time, the session
    expires and Amazon Lex deletes any data provided before the timeout. You can specify between 60 (1 minute) and
    86,400 (24 hours) seconds."""

    bot_tags: Optional[dict[str, str]] = Field(default=UNSET, alias="botTags")
    """A list of tags to add to the bot. You can only add tags when you import a bot. You can't use the UpdateBot
    operation to update tags. To update tags, use the TagResource operation."""

    test_bot_alias_tags: Optional[dict[str, str]] = Field(default=UNSET, alias="testBotAliasTags")
    """A list of tags to add to the test alias for a bot. You can only add tags when you import a bot. You can't use the
    UpdateAlias operation to update tags. To update tags on the test alias, use the TagResource operation."""


class BotImportSpecificationDict(TypedDict):
    bot_name: str
    role_arn: str
    data_privacy: DataPrivacyDict
    error_log_settings: NotRequired[ErrorLogSettingsDict]
    idle_session_ttl_in_seconds: NotRequired[int]
    bot_tags: NotRequired[dict[str, str]]
    test_bot_alias_tags: NotRequired[dict[str, str]]
