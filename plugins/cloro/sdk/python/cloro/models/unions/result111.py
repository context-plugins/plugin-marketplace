from __future__ import annotations

from typing import TypeAlias

from ..chat_gpt_result import ChatGptResult, ChatGptResultDict

Result111: TypeAlias = ChatGptResult | list[ChatGptResult]
"""ChatGPT's response data. An array, with one response for each prompt in order, when ``prompt`` is an array."""

Result111Dict: TypeAlias = ChatGptResultDict | list[ChatGptResultDict]
