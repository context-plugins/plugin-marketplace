from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..button1_bundle_social_conversation_api import (
    Button1BundleSocialConversationApi,
    Button1BundleSocialConversationApiDict,
)
from ..button2_bundle_social_conversation_api import (
    Button2BundleSocialConversationApi,
    Button2BundleSocialConversationApiDict,
)
from ..button_bundle_social_conversation_api import (
    ButtonBundleSocialConversationApi,
    ButtonBundleSocialConversationApiDict,
)

Button3BundleSocialConversationApi: TypeAlias = Annotated[
    (
        Annotated[ButtonBundleSocialConversationApi, Tag("POSTBACK")]
        | Annotated[Button1BundleSocialConversationApi, Tag("URL")]
        | Annotated[Button2BundleSocialConversationApi, Tag("PHONE")]
    ),
    WireDiscriminator("type"),
]

Button3BundleSocialConversationApiDict: TypeAlias = (
    ButtonBundleSocialConversationApiDict
    | Button1BundleSocialConversationApiDict
    | Button2BundleSocialConversationApiDict
)
