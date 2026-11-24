from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DocumentTemplates(int, Enum):
    """1 = Default 3 = Template1 5 = Template2 7 = Template3 9 = Template4 11 = Template5 13 = TemplateA5 15 =
    Template9x11withOriginal 17 = Template8 101 = NativeDefault 103 = Native1 105 = Native3 107 = Native5 109 = Native7
    111 = Native9 113 = Native11 115 = Native13 201 = Thermal1 203 = Thermal2 205 = SocialSlip 301 = ShortCA1 303 =
    ShortCA2 305 = ShortCA3"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9
    VALUE_11 = 11
    VALUE_13 = 13
    VALUE_15 = 15
    VALUE_17 = 17
    VALUE_101 = 101
    VALUE_103 = 103
    VALUE_105 = 105
    VALUE_107 = 107
    VALUE_109 = 109
    VALUE_111 = 111
    VALUE_113 = 113
    VALUE_115 = 115
    VALUE_201 = 201
    VALUE_203 = 203
    VALUE_205 = 205
    VALUE_301 = 301
    VALUE_303 = 303
    VALUE_305 = 305

    __str__ = str.__str__


DocumentTemplatesOrInt: TypeAlias = Annotated[DocumentTemplates | int, open_enum_validator(DocumentTemplates)]
