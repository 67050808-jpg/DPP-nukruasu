@echo off
setlocal enabledelayedexpansion
set list=

for %%f in (*) do (
    if not "%%f"=="." if not "%%f"==".." (
        set "list=!list!,%%f"
    )
)


set list=%list:~1%

echo %list%
