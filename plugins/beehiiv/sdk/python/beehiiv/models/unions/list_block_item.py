from __future__ import annotations

from typing import TypeAlias

from ..list_block_item_data import ListBlockItemData, ListBlockItemDataDict

ListBlockItem: TypeAlias = str | ListBlockItemData
"""A list item as either plain text or formatted text data."""

ListBlockItemDict: TypeAlias = str | ListBlockItemDataDict
