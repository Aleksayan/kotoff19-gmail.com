    if [[ "${{ runner.os }}" == "Linux" ]] ; then
          export XVFB=xvfb-run
        fi
        if [[ "${{ github.base_ref }}" == "beta" ]] || [[ "${{ github.ref }}" == "beta" ]] ; then
        if [[ "${{ github.base_ref }}" == "beta" ]] || [[ "${{ github.ref }}" == "refs/heads/beta" ]] ; then
          export TESTS_BRANCH=beta
        else
          export TESTS_BRANCH=main
